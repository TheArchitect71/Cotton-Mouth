import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Subscription } from "rxjs";

import { QuestionsService } from "../questions.service";
import { Question } from "../question.model";
import { AuthService } from "src/app/authentication/auth.service";

@Component({
  selector: "app-answer",
  templateUrl: "./answer.component.html",
  styleUrls: ["./answer.component.css"],
})
export class AnswerComponent implements OnInit, OnDestroy {
  enteredTitle = "";
  enteredContent = "";
  question: Question;
  isLoading = false;
  form: FormGroup;
  imagePreview: string;
  private mode = "create";
  private questionId: string;
  private authStatusSub: Subscription;

  constructor(
    public questionsService: QuestionsService,
    public route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe((authStatus) => {
        this.isLoading = false;
      });
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      content: new FormControl(null, { validators: [Validators.required] }),
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("questionId")) {
        this.mode = "edit";
        this.questionId = paramMap.get("questionId");
        this.isLoading = true;
        this.questionsService.getQuestion(this.questionId).subscribe((questionData) => {
          this.isLoading = false;
          this.question = {
            id: questionData._id,
            title: questionData.title,
            // creator: questionData.creator,
          };
          this.form.setValue({
            title: this.question.title,
          });
        });
      } else {
        this.mode = "create";
        this.questionId = null;
      }
    });
  }

  onSaveQuestion() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === "create") {
      this.questionsService.addQuestion(
        this.form.value.title,
        this.form.value.content,
      );
    } else {
      this.questionsService.updateQuestion(
        this.questionId,
        this.form.value.title,
      );
    }
    this.form.reset();
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}

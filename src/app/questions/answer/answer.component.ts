import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap, Params } from "@angular/router";
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
  // enteredAnswer = "";
  question: any = {
    id: '',
    title: '',
    answers: []
  };
  isLoading = false;
  // form: FormGroup;
  private mode = "create";
  private id: string;
  private title: string;
  private authStatusSub: Subscription;

  constructor(
    public questionsService: QuestionsService,
    public route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe((authStatus) => {
        this.isLoading = false;
      });
    this.getQuestion();
  }

  getQuestion(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("id")) {
        this.mode = 'edit';
        this.id = paramMap.get("id");
        this.questionsService.getQuestion(this.id).subscribe(postData => {
          this.question = {
            id: postData.question._id,
            title: postData.question.title,
            answers: postData.question.answers
          };
        });
      } else { 
        this.mode = 'create';
        this.id = null;
      }
    })
    }

  // onSaveQuestion() {
  //   if (this.form.invalid) {
  //     return;
  //   }
  //   this.isLoading = true;
  //   if (this.mode === "create") {
  //     this.questionsService.addQuestion(
  //       this.form.value.answer,
  //       this.form.value.content
  //     );
  //   } else {
  //     this.questionsService.updateQuestion(this.id, this.form.value.answer);
  //   }
  //   this.form.reset();
  // }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}

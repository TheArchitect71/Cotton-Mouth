import { Component, OnDestroy, OnInit } from "@angular/core";
import { QuestionsService } from "../questions.service";
import { PageEvent } from "@angular/material/paginator";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/authentication/auth.service";
import { Question } from "../question.model";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit, OnDestroy {
  panelOpenState = false;
  questions = [];
  isLoading = false;
  totalQuestions = 0;
  questionsPerPage = 2;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;
  userId: string;
  private questionsSub: Subscription;
  private authStatusSub: Subscription;

  constructor(
    private questionsService: QuestionsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.questionsService.getQuestions(this.questionsPerPage, this.currentPage);
    this.userId = this.authService.getUserId();
    this.questionsSub = this.questionsService
      .getQuestionUpdateListener()
      .subscribe(
        (questionData: { questions: Question[]; questionCount: number }) => {
          this.isLoading = false;
          this.totalQuestions = questionData.questionCount;
          this.questions = questionData.questions;
        }
      );
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe((isAuthenticated) => {
        this.userIsAuthenticated = isAuthenticated;
        this.userId = this.authService.getUserId();
      });
  }

  onChangedPage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.questionsPerPage = pageData.pageSize;
    this.questionsService.getQuestions(this.questionsPerPage, this.currentPage);
  }

  ngOnDestroy() {
    this.questionsSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }
}

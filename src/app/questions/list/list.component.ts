import { Component, OnDestroy, OnInit } from "@angular/core";
import { QuestionsService } from "../questions.service";
import { PageEvent } from "@angular/material/paginator";
import { Subscription } from "rxjs";
import { AuthService } from "src/app/authentication/auth.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
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
  journeyPath = "";
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;
  userInfo: {};
  private questionsSub: Subscription;
  private authStatusSub: Subscription;

  constructor(
    private questionsService: QuestionsService,
    public route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // this.getQuestions();
    this.getQuestionsByJourney();
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe((isAuthenticated) => {
        this.userIsAuthenticated = isAuthenticated;
        this.userInfo = this.authService.getUserInfo();
      });
  }

  getQuestions() {
    this.questionsService.getQuestions(this.questionsPerPage, this.currentPage);
    this.userInfo = this.authService.getUserInfo();
    this.questionsSub = this.questionsService
      .getQuestionUpdateListener()
      .subscribe(
        (questionData: { questions: Question[]; questionCount: number }) => {
          this.isLoading = false;
          this.totalQuestions = questionData.questionCount;
          this.questions = questionData.questions;
        }
      );
  }

  getQuestionsByJourney() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.journeyPath = paramMap.get('journeyPath');
      this.questionsService.getQuestionByJourney(this.journeyPath);
      this.questionsSub = this.questionsService
        .getQuestionUpdateListener()
        .subscribe(
          (questionData: { questions: Question[]; questionCount: number }) => {
            this.isLoading = false;
            this.totalQuestions = questionData.questionCount;
            this.questions = questionData.questions;
          }
        );
    })
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

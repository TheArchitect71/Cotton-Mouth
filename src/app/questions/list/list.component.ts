import {
  Component,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { QuestionsService } from "../questions.service";
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
  pageSizeOptions = [5, 7, 11];
  journeyPath = "";
  totalQuestions = 31;
  questions = [];
  isLoading = false;
  questionsPerPage = 5;
  currentPage = 1;
  lastId;
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
    this.isLoading = true;
    this.getQuestionsByJourney();
    this.userInfo = this.authService.getUserInfo();
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe((isAuthenticated) => {
        this.userIsAuthenticated = isAuthenticated;
        this.userInfo = this.authService.getUserInfo();
      });
  }

  getQuestionsByJourney() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.journeyPath = paramMap.get("journeyPath");
      this.questionsService.getQuestionByJourney(
        this.journeyPath,
        this.questionsPerPage,
        this.lastId
      );
      this.questionsSub = this.questionsService
        .getQuestionUpdateListener()
        .subscribe((questionData: { questions: Question[]; last_id: any }) => {
          this.isLoading = false;
          this.questions = questionData.questions;
          this.lastId = questionData.last_id;
        });
    });
  }

  onChangedPage() {
    this.isLoading = true;
    this.questionsService.getQuestionByJourney(
      this.journeyPath,
      this.questionsPerPage,
      this.lastId
    );
    console.log(this.lastId);
  }

  ngOnDestroy() {
    this.questionsSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }
}

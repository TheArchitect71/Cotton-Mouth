import { Injectable } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { catchError, map, subscribeOn, tap } from "rxjs/operators";
import { Router } from "@angular/router";

import { Question } from "./question.model";

import { environment } from "../../environments/environment";

const BACKEND_URL = environment.apiUrl + "/api/v1/questions";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class QuestionsService {
  private questions: Question[] = [];
  private journeyPath: string;
  private questionsUpdated = new Subject<{
    questions: Question[];
    last_id: any;
  }>();

  constructor(private http: HttpClient, private router: Router) {}

  getQuestions(questionsPerPage: number) {
    const queryParams = `?pagesize=${questionsPerPage}`;
    this.http
      .get<{ message: string; questions: any; maxQuestions: number }>(
        BACKEND_URL + queryParams
      )
      .pipe(
        map((questionData) => {
          return {
            questions: questionData.questions.map((question) => {
              return {
                title: question.title,
                id: question._id,
              };
            }),
            maxQuestions: questionData.maxQuestions,
          };
        })
      )
      .subscribe((transformedQuestionData) => {
        this.questions = transformedQuestionData.questions;
        this.questionsUpdated.next({
          questions: [...this.questions],
          last_id: transformedQuestionData
        });
      });
  }

  getQuestionByJourney(journeyPath: string, questionsPerPage: number, lastId: any) {
    const queryParams = `journeys/${journeyPath}`;
    const queryParams2 = `${queryParams}&pageSize=${questionsPerPage}&lastId=${lastId}`;
    this.journeyPath = journeyPath;
    this.http
      .get<{ message: string; titles: any; last_id: any}>(
        `${BACKEND_URL}/${queryParams2}`
      )
      .pipe(
        map((journeyData) => {
          return {
            questions: journeyData.titles.map((question) => {
              return {
                title: question.title,
                id: question._id,
              };
            }),
            last_id: journeyData.last_id
          };
        })
      )
      .subscribe((transformedQuestionData) => {
        this.questions = transformedQuestionData.questions;
        this.questionsUpdated.next({
          questions: [...this.questions],
          last_id: transformedQuestionData.last_id
        });
      });
  }

  getQuestionUpdateListener() {
    return this.questionsUpdated.asObservable();
  }

  getQuestion(id: string) {
    return this.http.get<{
      question: { _id: string; title: string; answers: [] };
    }>(`${BACKEND_URL}/id/${id}`, { responseType: "json" });
  }

  addAnswer(questionId: string, answer: string) {
    const body = new HttpParams()
      .set(`question_id`, questionId)
      .set(`answer`, answer);
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
    });
    this.http
      .post<{ message: string; question: Question }>(
        `${BACKEND_URL}/answer`,
        body,
        { headers }
      )
      .subscribe((responseData) => {
        this.router.navigate([`/questions/${this.journeyPath}`]);
      });
  }

  updateQuestion(id: string, title: string) {
    let questionData: Question | FormData;

    questionData = new FormData();
    questionData.append("id", id);
    questionData.append("title", title);

    this.http.put(BACKEND_URL + id, questionData).subscribe((response) => {
      this.router.navigate(["/"]);
    });
  }

  deleteAnswer(answerId: string, questionId: string) {
    const body = new HttpParams()
      .set(`question_id`, questionId)
      .set(`answer_id`, answerId);
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded",
      }),
      body: body,
    };
    return this.http.delete(`${BACKEND_URL}/answer`, options);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

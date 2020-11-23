import { Injectable } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { Router } from "@angular/router";

import { Question } from "./question.model";

import { environment } from "../../environments/environment";
const BACKEND_URL = environment.apiUrl + "api/v1/questions";

@Injectable({
  providedIn: "root",
})
export class QuestionsService {
  private questions: Question[] = [];
  private questionsUpdated = new Subject<{
    questions: Question[];
    questionCount: number;
  }>();

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient, private router: Router) {}

  getQuestions(questionsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${questionsPerPage}&page=${currentPage}`;
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
                creator: question.creator,
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
          questionCount: transformedQuestionData.maxQuestions,
        });
      });
  }

  getQuestionUpdateListener() {
    return this.questionsUpdated.asObservable();
  }

  getQuestion(id: string) {
    return this.http.get<{
      _id: string;
      title: string;
      creator: string;
    }>(BACKEND_URL + id);
  }

  addQuestion(title: string, content: string) {
    const questionData = new FormData();
    questionData.append("title", title);
    questionData.append("content", content);
    this.http
      .post<{ message: string; question: Question }>(BACKEND_URL, questionData)
      .subscribe((responseData) => {
        this.router.navigate(["/"]);
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

  deleteQuestion(questionId: string) {
    return this.http.delete(BACKEND_URL + questionId);
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

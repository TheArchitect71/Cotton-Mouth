import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';

import {  Question } from '../questions/question-interface';

@Injectable({
  providedIn: "root",
})
export class QuestionsService {
  private productsUrl = "api/products"; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<Question[]> {
    return this.http
      .get<Question[]>(this.productsUrl)
      .pipe(catchError(this.handleError<Question[]>("getProducts", [])));
  }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

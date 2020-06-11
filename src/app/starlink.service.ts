import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Information } from './information';
import { INFORMATION } from './mock-information';

@Injectable({
  providedIn: 'root'
})
export class StarLinkService {

  constructor() { }
  getDocuments(): Observable<Information[]> {
    return of(INFORMATION);
  }
}

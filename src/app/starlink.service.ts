import { Injectable } from '@angular/core';

import { Information } from './information';
import { INFORMATION } from './mock-information';

@Injectable({
  providedIn: 'root'
})
export class StarLinkService {

  constructor() { }
  getDocuments(): Information[] {
    return INFORMATION;
  }
}

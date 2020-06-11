import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Information } from './information';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const documents = [
      {
        id: 11,
        content:
          "As a web developer, I work to better understand how web applications motivates and shapes the way we do business and administration. My expertise includes project design and management, data manipulation and interpretation, and the development and implementation of open-source tools. ",
      },
      {
        id: 12,
        content:
          "I enjoy generating new ideas and devising feasible solutions to broadly relevant problems. My colleagues would describe me as a driven, resourceful individual who maintains a positive, proactive attitude when faced with adversity. ",
      },
      {
        id: 13,
        content:
          " Currently, I’m seeking opportunities that will allow me to develop and promote technologies that benefit the development of the humanities. Specific fields of interest include machine learning, biotechnology, and internet-of-things. 🕸 ",
      }
    ];
    return {documents};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(documents: Information[]): number {
    return documents.length > 0 ? Math.max(...documents.map(document => document.id)) + 1 : 11;
  }
}
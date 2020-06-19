import { Component, OnInit } from '@angular/core';

// import { StarLinkService } from '../starlink.service';
import { Information } from '../information';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor() {}

  summaries = [
    {
      id:1,
      text: `As a web developer, I work to better understand how web applications
      motivates and shapes the way we do business and administration. My
      expertise includes project design and management, data manipulation and
      interpretation, and the development and implementation of open-source
      tools.`
    },
    {
      id:2,
      text: `I enjoy generating new ideas and devising feasible solutions to broadly
      relevant problems. My colleagues would describe me as a driven,
      resourceful individual who maintains a positive, proactive attitude when
      faced with adversity.`
    },
    {
      id:3,
      text: `Currently, I’m seeking opportunities that will allow me to develop and
      promote technologies that benefit the development of the humanities.
      Specific fields of interest include machine learning, biotechnology, and
      internet-of-things. 🕸`
    }
  ]
 

}

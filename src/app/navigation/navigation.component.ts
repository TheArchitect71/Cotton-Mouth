import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  navigationList = [
    {
      id: 1,
      route: '/about',
      title: `About`,
      content: `To Be Authentic. To Surrender the Outcome. To Do Uncomfortable Work.`
    },
    {
      id: 2,
      route: '/experience',
      title: `Experience`,
      content: `Learning is an Active Process that Requires Ardor and Diligence.`
    },
    {
      id: 3,
      route: '/projects',
      title: `Projects`,
      content: `Making a Lively Game Out of Mastering Web Development.`
    },
    {
      id: 4,
      route: '/technology',
      title: `Technology`,
      content: `Developing the Front-End and Back-End of the Web using Open Source
      Tools.`
    },
    {
      id: 5,
      route: '/favorites',
      title: `Favorites`,
      content: `Books, Movies and TV Shows Dealing with the Humanities.`
    },
    {
      id: 6,
      route: '/education',
      title: `Education`,
      content: `Facilitating the acquisition of knowledge, skills, values, beliefs, and habits.`
    }
  ]

  ngOnInit() {
  }

}

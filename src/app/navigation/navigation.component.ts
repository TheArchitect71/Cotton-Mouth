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
      title: `The Story`,
      content: `If a Story is in You. It has to Come Out`
    },
    {
      id: 2,
      route: '/experience',
      title: `Destination Journey`,
      content: `Finding your Life's Purpose or True Calling`
    },
    {
      id: 3,
      route: '/projects',
      title: `Overcomer's Journey`,
      content: `Conquering your Fears`
    },
    {
      id: 4,
      route: '/technology',
      title: `Chaotic Resolve Journey`,
      content: `Achieving Inner Peace`
    },
    {
      id: 5,
      route: '/favorites',
      title: `Achievement Journey`,
      content: `Creating New Goals`
    },
    {
      id: 6,
      route: '/education',
      title: `Self-Discovery Journey`,
      content: `Exploring your True Creative Passions`
    },
    {
      id: 2,
      route: '/experience',
      title: `Writing a New Chapter Journey`,
      content: `Learning from Past Mistakes`
    },
    {
      id: 3,
      route: '/projects',
      title: `Mending Fences Journey`,
      content: `Righting my Wrongs`
    },
    {
      id: 4,
      route: '/technology',
      title: `Self-Improvement Journey`,
      content: `Loving Yourself Through Acceptance`
    },
    {
      id: 5,
      route: '/favorites',
      title: `Spiritual Journey`,
      content: `Exploring my Beliefs`
    }
  ]

  ngOnInit() {
  }

}

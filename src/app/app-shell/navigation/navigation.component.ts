import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
})
export class NavigationComponent implements OnInit {
  ngOnInit() {}

  navigationList = [
    {
      id: 2,
      route: `/questions/?journeys=destination`,
      title: `Destination Journey`,
      content: `Finding your Life's Purpose or True Calling`,
    },
    {
      route: `/questions/?journeys=humanitarian`,
      title: `Humanitarian Journey`,
      content: `Make a Difference in the World`
    },
    {
      id: 3,
      route: "/questions/?journeys=overcomer",
      title: `Overcomer's Journey`,
      content: `Conquering your Fears`,
    },
    {
      id: 4,
      route: "/questions/?journeys=resolve",
      title: `Chaotic Resolve Journey`,
      content: `Achieving Inner Peace`,
    },
    {
      id: 5,
      route: "/questions/?journeys=achievement",
      title: `Achievement Journey`,
      content: `Creating New Goals`,
    },
    {
      id: 6,
      route: "/questions/?journeys=selfdiscovery",
      title: `Self-Discovery Journey`,
      content: `Exploring your True Creative Passions`,
    },
    {
      id: 2,
      route: "/questions/?journeys=newchapter",
      title: `Writing a New Chapter Journey`,
      content: `Learning from Past Mistakes`,
    },
    {
      id: 3,
      route: "/questions/?journeys=mending",
      title: `Mending Fences Journey`,
      content: `Righting your Wrongs`,
    },
    {
      id: 4,
      route: "/questions/?journeys=selfimprovement",
      title: `Self-Improvement Journey`,
      content: `Loving Yourself Through Acceptance`,
    },
    {
      id: 5,
      route: "/questions/?journeys=spiritual",
      title: `Spiritual Journey`,
      content: `Exploring your Beliefs`,
    },
  ];
}

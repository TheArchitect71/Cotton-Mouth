import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.css"],
})
export class ExperienceComponent implements OnInit {
  panelOpenState = false;
  constructor() {}

  experiencePoints = [
    {
      id: 1,
      title: `Explore various cases and scenarios.`,
      text: `Strong interest and skills in web technologies: HTML, CSS, &
          JavaScript.`,
      secondaryText: `Experience with modern enterprise design philosophies & patterns.`,
    },
    {
      id: 2,
      title: `Keeping up with evolving industry`,
      text: `Understanding how the web works from a rudimentary level.`,
      secondaryText: `Ability to match solutions to business needs without unnecessary
      complexity.`,
    },
    {
      id: 1,
      title: `Implement for speed and scalability.`,
      text: `Good understanding of asynchronous request handling.`,
      secondaryText: `Provide appropriate endpoints on Backend, for Frontend to consume.`,
    },
    {
      id: 2,
      title: `Involved with all aspects of the user.`,
      text: `Implementing Users, Authentication as well as Authorization.`,
      secondaryText: `Assuring all user input is validated, experience is intuitive &
      accessible.`,
    },
    {
      id: 1,
      title: `Behaved interface across devices.`,
      text: `Design and develop product assets, features, themes and style guides.`,
      secondaryText: `Develop applications using frameworks to avoid cross-browser
      compatibility issues.`,
    },
    {
      id: 2,
      title: `Collaborate and cultivate.`,
      text: `Strong communication skills, both written and verbal.`,
      secondaryText: `Manage project priorities, deadlines and deliverables.`,
    },
  ];

  ngOnInit() {}
}

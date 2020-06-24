import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  projectList = [
    {
      id: 1,
      title: `40-Eridani`,
      text: `Scalable and high-speed Web Application with Angular (formerly named
        Angular 2, now just "Angular") and NodeJS + Express + MongoDB.`,
      link: `https://github.com/TheArchitect71/40-Eridani`,
    },
    {
      id: 2,
      title: `Risa`,
      text: `Using Node Core Node.js Basics & Basic Core Modules | Parsing Requests
      & Sending Responses | Rendering HTML Dynamically (on the Server) |
      Using Express.js`,
      link: `https://github.com/TheArchitect71/Risa`
    },
    {
      id: 3,
      title: `Andoria`,
      text: `Relating to, denoting, or engaged in an employment pattern that
      involves a succession of short-term contracts and part-time work,
      rather than the more traditional model of a long-term single job.`,
      link: `https://github.com/TheArchitect71/Andoria`
    },
    {
      id: 4,
      title: `Inventory-Editor`,
      text: `This basic app has many of the features you'd expect to find in a
      data-driven application. It acquires and displays a list of products,
      edits a selected product's detail, and navigates among different views
      of data.`,
      link: `https://github.com/TheArchitect71/Inventory-Editor`
    },
  ];
  ngOnInit() {}
}

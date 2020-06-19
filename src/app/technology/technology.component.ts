import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-technology",
  templateUrl: "./technology.component.html",
  styleUrls: ["./technology.component.css"],
})
export class TechnologyComponent implements OnInit {
  constructor() {}

  technologyList = [
    {
      id: 1,
      image: `/assets/pwa-reliable.png`,
      title: `In the Past...`,
      text: `When browsers were much less capable than today, and JavaScript
      performance was poor, every page was coming from a server. Every time
      you clicked something, a new request was made to the server and the
      browser subsequently loaded the new page.`,
      secondTitle: `Forward in Time`,
      secondText: `A Single Page Application feels much faster to the user, because instead
      of waiting for the client-server communication to happen, and wait for
      the browser to re-render the page, you can now have instant feedback.`,
    },
    {
      id: 2,
      image: `/assets/pwa-fast.png`,
      title: `Security`,
      text: `When based software need updating, every single device in which the
      application is installed will need individually updating. Compare this
      with a web based application, where a security or functionality update
      can be rolled out to every version of the web application with zero
      downtime, giving users instant access to the updated version of the app.`,
      secondTitle: `Efficiency`,
      secondText: `In addition to making the experience faster to the user, the server will
      consume less resources because you can focus on providing an efficient
      API instead of building the layouts server-side.`,
    },
    {
      id: 3,
      image: `/assets/pwa-engaging.png`,
      title: `Customization`,
      text: `As a custom web application is made specifically to your business needs,
      it’s completely flexible and scalable to your business’s demands and
      growth. By only having features and functions which are relevant to your
      business, you’ll reduce training time and can add functionality as your
      business grows.`,
      secondTitle: `Scalability`,
      secondText: `This makes it ideal if you also build a mobile app on top of the API, as
      you can completely reuse your existing server-side code. Single Page
      Applications are easy to transform into Progressive Web Apps, which in
      turn enables you to provide local caching and to support offline
      experiences for your services.`,
    },
  ];
  ngOnInit() {}
}

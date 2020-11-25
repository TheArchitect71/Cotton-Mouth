import { Component } from "@angular/core";
import { Subscription } from "rxjs";

import { AuthService } from "src/app/authentication/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  opened: boolean;
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

  navigationList = [
    {
      id: 2,
      route: "/experience",
      title: `Services`,
      content: `Learning is an Active Process that Requires Ardor and Diligence.`,
    },
    {
      id: 3,
      route: "/technology",
      title: `Small Business`,
      content: `We apply the industry best practices to help you succeed in your business. We involve you in the process to find out the best possible solution.`,
    },
    {
      id: 6,
      route: "/favorites",
      title: `Education`,
      content: `Facilitating the acquisition of knowledge, skills, values, beliefs, and habits.`,
    },
    {
      id: 1,
      route: "/about",
      title: `About`,
      content: `To Be Authentic. To Surrender the Outcome. To Do Uncomfortable Work.`,
    }
  ];
}

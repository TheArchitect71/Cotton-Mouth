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
    this.authService.autoAuthUser();
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
      id: 1,
      route: "/about",
      title: `About`,
      content: `To Be Authentic. To Surrender the Outcome. To Do Uncomfortable Work.`,
    },
    {
      title: `Contact Us`
    },
    {
      title: 'Log In'
    }
  ];
}

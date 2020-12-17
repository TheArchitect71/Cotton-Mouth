import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NavigationComponent } from "./app-shell/navigation/navigation.component";
import { AboutComponent } from "./app-shell//about/about.component";
import { ContactComponent } from "./app-shell//contact/contact.component";
import { ListComponent } from "./questions/list/list.component";
import { AnswerComponent } from "./questions/answer/answer.component";

import { AuthGuard } from "./authentication/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: NavigationComponent,
    data: { animation: "FilterPage" },
  },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  {
    path: "auth",
    loadChildren: () =>
      import("./authentication/auth.module").then((m) => m.AuthModule),
  },
  { path: "questions/:journeyPath", component: ListComponent },
  { path: "answer/:id", component: AnswerComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "disabled" }),
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}

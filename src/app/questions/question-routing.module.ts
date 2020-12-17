import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListComponent } from "./list/list.component";
import { AnswerComponent } from "./answer/answer.component";

const routes: Routes = [
  { path: "questions/:journeyPath", component: ListComponent },
  { path: "answer/:id", component: AnswerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


import { AngularMaterialModule } from "../angular-material.module";
import { AnswerComponent } from './answer/answer.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ListComponent, AnswerComponent],
  imports: [CommonModule, AngularMaterialModule, FormsModule]
})
export class QuestionsModule {}
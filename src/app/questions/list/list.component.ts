import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  panelOpenState = false;
  questions = [];
  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.getQuestions
  }

  getQuestions(): void {
    this.questionsService.getQuestions().subscribe(questions => {
      this.questions = questions;
    })
  }

}

import { Component, OnInit } from '@angular/core';

import { StarLinkService } from '../starlink.service';
import { Information } from '../information';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  documents: Information[];

  constructor(private starLinkService: StarLinkService) {}

  getDocuments(): void {
    this.starLinkService.getDocuments()
      .subscribe(documents => this.documents = documents);
  }
  ngOnInit() {
    this.getDocuments();
  }

}

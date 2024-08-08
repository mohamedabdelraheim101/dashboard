import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audience',
  templateUrl: './audience.component.html',
  styleUrls: ['./audience.component.scss']
})
export class AudienceComponent implements OnInit {

  selectedSection: string = ''; 

  selectSection(section: string) {
    this.selectedSection = section;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

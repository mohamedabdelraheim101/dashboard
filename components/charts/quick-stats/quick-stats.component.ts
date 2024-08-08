import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-stats',
  templateUrl: './quick-stats.component.html',
  styleUrls: ['./quick-stats.component.scss']
})
export class QuickStatsComponent implements OnInit {

  stats = {
    today: 78,
    thisMonth: 459,
    allTime: '54k',
    bounceRate: 81.08,
    sessionDuration: '00:01:41',
    newSession: 63.86
  };
  constructor() { }

  ngOnInit(): void {
  }

}

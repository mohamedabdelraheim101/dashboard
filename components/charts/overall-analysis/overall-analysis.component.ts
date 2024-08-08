import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-overall-analysis',
  templateUrl: './overall-analysis.component.html'
})
export class OverallAnalysisComponent implements OnInit {
    Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      height:'35%'
    },
    title: {
      text: ''
    },
    plotOptions: {
      pie: {
        innerSize: '80%' 
      }
    },
    series: [
      {
        type: 'pie',
        data: [
          { name: 'Recurring', y: 42 },
          { name: 'Aware', y: 87 }
        ]
      }
    ]
  };

  constructor() { }

  ngOnInit(): void { }

  
}

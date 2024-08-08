import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HC_exporting from 'highcharts/modules/exporting';

HighchartsMore(Highcharts);
HC_exporting(Highcharts);

@Component({
  selector: 'app-performance-evaluation',
  templateUrl: './performance-evaluation.component.html',
  styleUrls: ['./performance-evaluation.component.scss']
})
export class PerformanceEvaluationComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      polar: true,
      type: 'area'
    },
    title: {
      text: ''
    },
    pane: {
      size: '50%'
    },
    xAxis: {
      categories: ['Taming', 'Accessory', 'Development', 'Grooming', 'Awareness', 'Ration'],
      tickmarkPlacement: 'on',
      lineWidth: 0
    },
    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0
    },
    series: [{
      name: 'Allocated resources',
      data: [43000, 19000, 60000, 35000, 17000, 10000],
      pointPlacement: 'on',
      type: 'area'
    }, {
      name: 'Spent resources',
      data: [50000, 39000, 42000, 31000, 26000, 14000],
      pointPlacement: 'on',
      type: 'area'
    }],
    credits: {
      enabled: false
    }
  };

  constructor() { }

  ngOnInit(): void {
  }
}

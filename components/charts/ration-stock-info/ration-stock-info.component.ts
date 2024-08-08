import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-ration-stock-info',
  templateUrl: './ration-stock-info.component.html',
  styleUrls: ['./ration-stock-info.component.scss']
})
export class RationStockInfoComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'area',
      height:'40%'
    },
    title: {
      text: 'Ration stock info'
    },
    xAxis: {
      categories: ['100', '110', '120', '130', '140', '150', '160', '170', '180']
    },
    yAxis: {
      title: {
        text: 'Ration stock'
      }
    },
    series: [
      {
        name: 'Dogs ration stock',
        type: 'area',
        data: [0, 10000, 20000, 30000, 40000, 30000, 20000, 10000, 0]
      },
      {
        name: 'Evil cat stock',
        type: 'area',
        data: [0, 5000, 15000, 25000, 35000, 25000, 15000, 5000, 0]
      }
    ],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 600
        },
        chartOptions: {
          legend: {
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    },
    plotOptions: {
      area: {
        stacking: 'normal'
      }
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

}

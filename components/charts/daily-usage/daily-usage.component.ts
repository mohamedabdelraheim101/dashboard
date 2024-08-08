import { Component, AfterViewInit, ElementRef, ViewChild, HostListener, OnDestroy } from '@angular/core';
import * as Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
import Accessibility from 'highcharts/modules/accessibility';

@Component({
  selector: 'app-daily-usage',
  templateUrl: './daily-usage.component.html',
  styleUrls: ['./daily-usage.component.scss']
})
export class DailyUsageComponent implements AfterViewInit, OnDestroy {

  @ViewChild('container', { static: false }) container: ElementRef | undefined;
  Highcharts: typeof Highcharts = Highcharts;
  chart: Highcharts.Chart | undefined;
  resizeObserver: MutationObserver | undefined;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      height:'50%',
    },
    title: {
      text: ''
    },
    tooltip: {
      valueSuffix: '%'
    },
  
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: [{
          enabled: true,
        }, {
          enabled: true,
          format: '{point.percentage:.1f}%',
          style: {
            fontSize: '1.2em',
            textOutline: 'none',
            opacity: 0.7
          },
       
          filter: {
            operator: '>',
            property: 'percentage',
            value: 10
          }
        }]
      }
    },
    series: [{
      type: 'pie',
      name: 'Percentage',
      data: [
        { name: 'swim', y: 52.02 },
        { name: 'closet', y: 26.71 },
        { name: 'front yard', y: 10.2 },
        { name: 'like a boss', y: 4.9 },
        { name: 'barking', y: 4.68 }
      ]
    }]
  };

  constructor() { }

  ngAfterViewInit(): void {
    // Load Highcharts modules
    Exporting(Highcharts);
    Accessibility(Highcharts);

    // Ensure container is defined before initializing the chart
    if (this.container) {
      this.chart = Highcharts.chart(this.container.nativeElement, this.chartOptions);

      // Observe changes to the container size
      this.resizeObserver = new MutationObserver(() => {
        if (this.chart) {
          this.chart.reflow();
        }
      });

      this.resizeObserver.observe(this.container.nativeElement, {
        attributes: true,
        childList: true,
        subtree: true
      });
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    // Trigger chart resize on window resize
    if (this.chart) {
      this.chart.reflow();
    }
  }

  ngOnDestroy(): void {
    // Cleanup the resize observer
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}

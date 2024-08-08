import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AudienceComponent } from './audience/audience.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { GridsterComponent } from './components/gridster/gridster.component';
import { GridsterModule } from 'angular-gridster2';
import { OverallAnalysisComponent } from './components/charts/overall-analysis/overall-analysis.component';
import { RationStockInfoComponent } from './components/charts/ration-stock-info/ration-stock-info.component';
import { FormsModule } from '@angular/forms';
import { QuickStatsComponent } from './components/charts/quick-stats/quick-stats.component';
import { PerformanceEvaluationComponent } from './components/charts/performance-evaluation/performance-evaluation.component';
import { RealTimeInfoComponent } from './components/charts/real-time-info/real-time-info.component';
import { DailyUsageComponent } from './components/charts/daily-usage/daily-usage.component';
import { JqxGridWidgetComponent } from './components/jqx-grid-widget/jqx-grid-widget.component';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { LoremComponent } from './audience/components/lorem/lorem.component';
import { ErosComponent } from './audience/components/eros/eros.component';
import { VestibulumComponent } from './audience/components/vestibulum/vestibulum.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AudienceComponent,
    SidebarComponent,
    NotfoundComponent,
    NavbarComponent,
    GridsterComponent,
    OverallAnalysisComponent,
    RationStockInfoComponent,
    QuickStatsComponent,
    PerformanceEvaluationComponent,
    RealTimeInfoComponent,
    DailyUsageComponent,
    JqxGridWidgetComponent,
    LoremComponent,
    ErosComponent,
    VestibulumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    GridsterModule,
    FormsModule,
    jqxGridModule


  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

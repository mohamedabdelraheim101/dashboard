import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AudienceComponent } from './audience/audience.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { JqxGridWidgetComponent } from './components/jqx-grid-widget/jqx-grid-widget.component';
import { LoremComponent } from './audience/components/lorem/lorem.component';
import { ErosComponent } from './audience/components/eros/eros.component';
import { VestibulumComponent } from './audience/components/vestibulum/vestibulum.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'audience',component:AudienceComponent , 
    children: [
      {path: 'lorem', component : LoremComponent},
      {path: 'eros', component : ErosComponent},
      {path: 'vestibulum', component : VestibulumComponent},

    ]
  },
  {path:'jqx-grid-widget',component:JqxGridWidgetComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

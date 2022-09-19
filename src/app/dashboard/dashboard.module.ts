import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [DashboardRoutingModule.components],
  imports: [CommonModule, DashboardRoutingModule, NgApexchartsModule,
  ],
})
export class DashboardModule {}

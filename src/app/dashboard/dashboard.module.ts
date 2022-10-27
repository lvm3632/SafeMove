import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NzGridModule } from 'ng-zorro-antd/grid';


@NgModule({
  declarations: [DashboardRoutingModule.components],
  imports: [CommonModule, DashboardRoutingModule, NgApexchartsModule,
    NzGridModule
  ],
})
export class DashboardModule {}

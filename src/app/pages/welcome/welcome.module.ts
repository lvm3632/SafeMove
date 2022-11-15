import { NzButtonModule, NzButtonSize } from 'ng-zorro-antd/button';
import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { QrCodeModule } from '../../qr-code/qr-code.module';
import { FormStatusModule } from 'src/app/form-status/form-status.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    WelcomeRoutingModule,
    NgApexchartsModule,
    QrCodeModule,
    FormStatusModule,
    NzGridModule,
    SharedModule,
    NzButtonModule,
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}

import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { QrCodeModule } from '../../qr-code/qr-code.module';


@NgModule({
  imports: [WelcomeRoutingModule, NgApexchartsModule, QrCodeModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}

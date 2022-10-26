import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from '../icons-provider.module';
import { ClonerService } from './services/cloner.service';
import { EventBusService } from './services/event-bus.service';
import { LoadingService } from './loading/loading.service';
import { MessagesService } from './messages/messages.service';
import { ConfigService } from './services/config.services';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './loading/loading.component';
import { MessagesComponent } from './messages/messages.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { ClockService } from './services/clock.service';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [MessagesComponent, LoadingComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
    NzButtonModule,
    NzGridModule,
    NzSpaceModule,
    NzTypographyModule
  ],
  exports: [
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    MessagesComponent,
    LoadingComponent,
    FormsModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
    NzButtonModule,
    NzGridModule,
    NzSpaceModule,
    NzTypographyModule
  ],
  providers: [
    ClonerService,
    EventBusService,
    ConfigService,
    MessagesService,
    LoadingService,
  ],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  // Ensure that CoreModule is only loaded into AppModule
  //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}

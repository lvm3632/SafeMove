import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessagesModule } from './messages/messages.module';
import { EventBusService } from './core/services/event-bus.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { StudentsService } from './core/services/students.service';
import { ClockService } from './core/services/clock.service';
import { ClonerService } from './core/services/cloner.service';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    NgbModule,
    MessagesModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, EventBusService, NzMessageService, StudentsService, ClockService, ClonerService],
  bootstrap: [AppComponent],
})
export class AppModule {}

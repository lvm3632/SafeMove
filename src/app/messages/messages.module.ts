import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesRoutingModule } from './messages-routing.module';


@NgModule({
  declarations: [MessagesRoutingModule.components],
  imports: [CommonModule, MessagesRoutingModule],
  exports: [],
})
export class MessagesModule {}

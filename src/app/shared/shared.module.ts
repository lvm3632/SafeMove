import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PureLoadingComponent } from './pure-loading/pure-loading.component';



@NgModule({
  declarations: [PureLoadingComponent],
  imports: [CommonModule],
  exports: [PureLoadingComponent],
})
export class SharedModule {}

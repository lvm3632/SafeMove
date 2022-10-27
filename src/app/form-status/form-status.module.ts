import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormStatusComponent } from './form-status/form-status.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { SharedModule } from '../shared/shared.module';
import { NzNotificationService } from 'ng-zorro-antd/notification';
export const options: Partial<IConfig> = {
  thousandSeparator: '@'
};


@NgModule({
  declarations: [FormStatusComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NzTypographyModule,
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NgxMaskModule.forRoot(options),
    SharedModule,
  ],
  exports: [FormStatusComponent],
  providers:[NzNotificationService]
})
export class FormStatusModule {}

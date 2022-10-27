import { NzInputModule } from 'ng-zorro-antd/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { ListStudentsComponent } from './list-students.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SharedModule } from '../shared/shared.module';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
@NgModule({
  declarations: [StudentsRoutingModule.components, ListStudentsComponent],
  imports: [
    CommonModule,
    NzTableModule,
    StudentsRoutingModule,
    NzDividerModule,
    NzSpaceModule,
    NzCardModule,
    NzIconModule,
    SharedModule,
    NzTabsModule,
    NzDropDownModule,
    FormsModule,
    NzInputModule,
    NzButtonModule
  ],
})
export class StudentsModule {}

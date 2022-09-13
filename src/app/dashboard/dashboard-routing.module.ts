import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetricsStudentsComponent } from './metrics-students/metrics-students.component';

const routes: Routes = [
  {
    path: '',
    component: MetricsStudentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
  static components = [MetricsStudentsComponent];
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './messages.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path: '',
    component: MessagesComponent,
    outlet: 'mensajes',
    children: [
      {
        path: 'details/:student',
        component: StudentComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesRoutingModule {
  static components = [MessagesComponent, StudentComponent];
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { EventBusService } from '../core/services/event-bus.service';
import { StudentsService } from '../core/services/students.service';
import { IStudent } from '../models/students.model.interface';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss'],
})
export class ListStudentsComponent implements OnInit {

  data$:Observable<any> = new Observable();
  dataSet: any[] = [];
  constructor(
    private router: Router,
    public studentService: StudentsService,
    public eventbus: EventBusService
  ) {}
  ngOnInit(): void {
    this.eventbus.on("people", "people").pipe(tap(console.log)).subscribe((data:any) => {
      this.dataSet = data;
      console.log(data, "data people");
      console.log(this.dataSet, "Data set?");
    })
  }
  getStudent(data: IStudent) {
    this.router.navigate(['/students', data?.idStudent]);
  }
}

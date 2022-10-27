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
  listSafe: IStudent[] = [];
  listPending: IStudent[] = [];
  searchValue = '';
  visible = false;
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

    this.listSafe = this.studentService.personas.filter((item: IStudent) => item.state == true);
    this.listPending = this.studentService.personas.filter((item: IStudent) => item.state == false);
  }
  getStudent(data: IStudent) {
    console.log(data?.idStudent, "INFO")
    this.router.navigate(['/students', data?.idStudent]);
  }
  resetPending(): void {
    this.searchValue = '';
    if(this.tmp.length)
    this.listPending = [...this.tmp];
    this.searchPending();
  }
  tmp: IStudent[] = [];
  searchPending(): void {
    this.visible = false;
    this.tmp = [...this.listPending];
    this.listPending = this.listPending.filter((item: IStudent) => item.fullName.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1 || item.idStudent.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1);
  }
}

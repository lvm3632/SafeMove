import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../core/services/students.service';
import { IStudent } from '../models/students.model.interface';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss'],
})
export class ListStudentsComponent implements OnInit {
  dataSet: IStudent[] = [];
  constructor(
    private router: Router,
    private studentService: StudentsService
  ) {}
  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((data: any[]) => {
      this.dataSet = data;
    })
  }
  getStudent(data: IStudent) {
    this.router.navigate(['/students', data.idStudent]);
  }
}

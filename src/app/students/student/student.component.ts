import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/core/services/students.service';
import { IStudent } from '../../models/students.model.interface';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  students$: Observable<any[]> = new Observable();

  student: IStudent = {
    idStudent: 'A01636172',
    fullName: 'Juan Perez',
    area: 'Biblioteca',
    room: '3307',
  };

  constructor(
    private studentService: StudentsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  studenIdUrl : string = "";
  ngOnInit(): void {
    this.studenIdUrl = this.route.snapshot.params['studentId'];
    this.students$ = this.studentService.getAllStudents();
  }
}

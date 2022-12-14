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
  students$: Observable<IStudent> = new Observable();
  student: any;
  constructor(
    private studentService: StudentsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  studenIdUrl: string = '';
  ngOnInit(): void {
    this.route.paramMap.subscribe(({ params }: any) => {
      this.studenIdUrl = params.idStudent;
      this.student = this.studentService.getStudentById(this.studenIdUrl);
    })
  }

  getStudent(data: IStudent) {
    console.log(data);
  }
}

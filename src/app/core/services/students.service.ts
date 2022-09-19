import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, first, delay, retry, shareReplay } from 'rxjs';
import { IStudent } from '../../models/students.model.interface';



@Injectable({
  providedIn: 'any',
})
export class StudentsService {
  constructor(private http: HttpClient) {}

  getAllStudents() {
    return this.http.get<any[]>(`./assets/students.json`).pipe(
      catchError((err: any) => {
        return [];
      }),
      map((data: any) => {
        console.log(data, 'Data');
        return data['data'];
      }),
      first(),
      delay(0),
      retry(3),
      shareReplay()
    );
  }

  getStudentById(idStudent: string) {
    return this.http.get<any[]>(`./assets/students.json`).pipe(
      catchError((err: any) => {
        return [];
      }),
      map((data: any) =>
        data['data'].find((student: IStudent) => student.idStudent == idStudent)
      ),
      first(),
      delay(250),
      retry(3),
      shareReplay()
    );
  }


}

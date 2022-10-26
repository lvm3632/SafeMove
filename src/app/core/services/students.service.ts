import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, first, delay, retry, shareReplay } from 'rxjs';
import { IStudent } from '../../models/students.model.interface';
import { EventBusService } from './event-bus.service';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  personas: IStudent[] = [];
  lastEvent: IStudent[] = [];

  constructor(private http: HttpClient,
    private eventbus: EventBusService) {}

  add(person: IStudent, tiempo?: string) {
    this.personas.push(person);
  }

  clear(){
    this.personas.length = 0;
  }

  copy(...personas: IStudent[]){
    this.lastEvent = [...personas];
  }

  getPeople(){
    return this.personas;
  }

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
    return this.personas.find((student: IStudent) => student.idStudent == idStudent);
  }

  getStudentByIdAssets(idStudent: string) {
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

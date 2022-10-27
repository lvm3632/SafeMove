import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, first, delay, retry, shareReplay, throwError, Observable } from 'rxjs';
import { IStudent } from '../../models/students.model.interface';
import { EventBusService } from './event-bus.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { convertSnaps } from '../utils/db-utils';
@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  personas: IStudent[] = [];
  static STUDENT_NUMBER = 50;
  constructor(private http: HttpClient,
    private eventbus: EventBusService,
    private db: AngularFirestore) {
      this.initList();
    }
  initList(){
    let names = ["Juan", "Pedro", "Michel", "Luis", "Lorenzo"];
    let surname = ["Perez", "González", "Rodríguez", "Díaz", "Fernández"];
    console.log(names, "Nombres");
    let areas = ["Edificio 1", "Edificio 2", "Edificio 3", "Otro"];
    let startNumber = 1636000;
    let room = 3000;
    for(let i = 0; i < StudentsService.STUDENT_NUMBER; i++){
      //A01636172
      room += i;
      startNumber += i;
      let randomName = names[Math.floor((Math.random() * names.length))];
      let surName = surname[Math.floor((Math.random() * names.length))];
      let area = areas[Math.floor(Math.random() * areas.length)];
      let obj : IStudent = {
        idStudent: 'A0' + startNumber.toString(),
        fullName: randomName + " " + surName,
        area: "N/A",
        room: "N/A",
        state: false // Pendiente
      }
      this.personas.push(obj);
    }
  }

  add(person: IStudent, tiempo?: string) {
    person.state = true;
    this.personas.push(person);
    this.eventbus.trigger("metricas", "metricas", this.personas);
  }

  clear(){
    this.personas.length = 0;
  }

 /* copy(...personas: IStudent[]){
    this.lastEvent = [...personas];
  }*/

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

   findStudentById(idStudent: string = "A01636172") : Observable<any> {
        return this.db
          .collection('students', (ref:any) => ref.where('idStudent', '==', idStudent))
          .snapshotChanges()
          .pipe(
            catchError((err:any) => {
              return throwError(() => err);
            }),
            map((snaps) => {
              const student = convertSnaps<IStudent>(snaps);
              console.log(student, 'Snaps entra a map');
              return student.length == 1 ? student[0] : undefined;
            }),
            first()
          );
  }


}

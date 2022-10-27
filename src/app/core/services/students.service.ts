import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, first, delay, retry, shareReplay } from 'rxjs';
import { IStudent } from '../../models/students.model.interface';
import { EventBusService } from './event-bus.service';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  personas: IStudent[] = [] ;
  static STUDENT_NUMBER = 50;
  constructor(private http: HttpClient,
    private eventbus: EventBusService) {
     /* let progressData: string | null = localStorage.getItem("in-progress");
      this.personas = JSON.parse(progressData || "") ?? "";*/
      let bottons: any | null = localStorage.getItem("bottons");
      bottons = bottons != null ? JSON.parse(bottons || "") : "";
        console.log(bottons, this.personas, "entro? af");

      if(!bottons.detenerBtn && !bottons.stopTimer && !bottons.pauseButton){
        this.personas = [];
        console.log(bottons, this.personas, "entro?");
      }else{
        let people: any | null = localStorage.getItem("in-progress");
        this.personas = people != null ? JSON.parse(people || "") : [];
      }
 

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
    this.personas = this.personas.filter((item: IStudent) => item.state == false) || [];
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


}

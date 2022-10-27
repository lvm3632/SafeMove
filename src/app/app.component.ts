import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { Subscription,  } from 'rxjs';
import { ClockService } from './core/services/clock.service';
import { EventBusService } from './core/services/event-bus.service';
import { StudentsService } from './core/services/students.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  size: NzButtonSize = 'large';
  isCollapsed = false;
  isButtonVisible = false;
  actualTime: string = "00:00:00";
  stopTimer: boolean = false;
  pauseButton: boolean = false;
  timerUnsuscribe = new Subscription();
  detenerBtn: boolean = false;
  actualTimeFb: string = "00:00:00";
  startFb: boolean = false;
  stateFb: string = "none";
  constructor(private clockService: ClockService,
    private studentsService: StudentsService,
    private eventbus: EventBusService,
    private db: AngularFirestore) { }

  ngOnInit() {
    this.db.firestore.collection('tiempo').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change: any) => {
        this.actualTimeFb = change.doc.data()?.actualTime;
        this.stateFb = change.doc.data()?.state;

        if(this.stateFb == "start"){
            this.stopTimer = true;
            this.pauseButton = false;
            this.detenerBtn = false;
        }else if(this.stateFb == "pause"){
          this.stopTimer = false;
          this.pauseButton = true;
          this.detenerBtn = true;
        }else if(this.stateFb == "stop"){
          this.detenerBtn = false;
          this.pauseButton = false;
          this.stopTimer = false;
        }
      })
    })
  }

  start() {
    this.stopTimer = true;
    this.pauseButton = false;
    this.detenerBtn = false;

    console.log(this.actualTimeFb, "VALOR ACTUAL")
    this.timerUnsuscribe = this.clockService.clock(this.actualTimeFb).subscribe((data: any) => {
      this.actualTime = data;
      this.eventbus.trigger("tiempo", "tiempo", this.actualTime);
      this.db.firestore.collection('tiempo').doc("time").set({ actualTime: this.actualTime, state:"start" });
    })
  }

  pause() {
    this.timerUnsuscribe.unsubscribe();
      this.stopTimer = false;
      this.pauseButton = true;
      this.detenerBtn = true;
      this.db.firestore.collection('tiempo').doc("time").set({ actualTime: this.actualTimeFb, state:"pause" });
  }

  stop() {
    this.timerUnsuscribe.unsubscribe();
    if (this.detenerBtn) {
      this.clockService.timeRemaining = 0;
      this.actualTime = "00:00:00";
      this.detenerBtn = false;
      this.pauseButton = false;
      this.clockService.end();
      console.log(this.studentsService.getPeople(), "Personas al detener");
      this.db.firestore.collection('tiempo').doc("time").set({ actualTime: "00:00:00",  state:"stop" });
      //this.studentsService.copy(...this.studentsService.getPeople());
      setTimeout(() => {
        this.studentsService.clear();
      }, 3000)
    }
  }

  test() {
    this.studentsService.findStudentById().subscribe((data: any) => {
      console.log(data, "??")
    });
  }




}

import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { Subscription } from 'rxjs';
import { ClockService } from './core/services/clock.service';
import { EventBusService } from './core/services/event-bus.service';
import { StudentsService } from './core/services/students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  size: NzButtonSize = 'large';
  isCollapsed = false;
  isButtonVisible = false;
  actualTime: string = "00:00:00";
  stopTimer: boolean = false;
  pauseButton: boolean = false;
  timerUnsuscribe = new Subscription();
  detenerBtn: boolean = false;

  constructor(private clockService: ClockService,
    private studentsService:StudentsService,
    private eventbus: EventBusService){}

  ngOnInit(){
    let bottons: any | null = localStorage.getItem("bottons");
    bottons = bottons != null ? JSON.parse(bottons || "") : "";

    let timer: any | null = localStorage.getItem("timer");
    timer = timer != null ? JSON.parse(timer || "") : "";

    if(bottons != ""){
      this.stopTimer = bottons.stopTimer;
      this.pauseButton = bottons.pauseButton;
      this.detenerBtn = bottons.detenerBtn;
    }

    if(timer != ""){
      this.actualTime = timer.actualTime;
      console.log(timer, "TIMER");
      if(this.stopTimer){
        this.start();
      }
    }
    console.log(this.actualTime, "tiempo actual");
  }

  start(){
    this.stopTimer = true;
    this.pauseButton = false;
    this.detenerBtn = false;
    localStorage.setItem('bottons', JSON.stringify({stopTimer: this.stopTimer, pauseButton: this.pauseButton, detenerBtn: this.detenerBtn}));
    console.log(this.actualTime, "TIEMPO ANTES??");
    this.timerUnsuscribe = this.clockService.clock(this.actualTime).subscribe((data:any) => {
      console.log(data, this.actualTime, "TIEMPOS")
      this.actualTime = data;
      this.eventbus.trigger("tiempo", "tiempo",  this.actualTime);
      localStorage.setItem('timer', JSON.stringify({actualTime: this.actualTime}));
      this.clockService.start();
    })
  }

  pause(){
    this.timerUnsuscribe.unsubscribe();
    this.stopTimer=false;
    this.pauseButton = true;
    this.detenerBtn = true;
    localStorage.setItem('bottons', JSON.stringify({stopTimer: this.stopTimer, pauseButton: this.pauseButton, detenerBtn: this.detenerBtn}));
  }

  stop(){
    this.timerUnsuscribe.unsubscribe();
    if(this.detenerBtn){
      this.clockService.timeRemaining = 0;
      this.actualTime = "00:00:00";
      localStorage.setItem('timer', JSON.stringify({actualTime: this.actualTime}));
      this.detenerBtn = false;
      this.pauseButton = false;
      this.clockService.end();
      console.log(this.studentsService.getPeople(), "Personas al detener");
      //this.studentsService.copy(...this.studentsService.getPeople());
      setTimeout(() => {
        this.studentsService.clear();
      }, 3000)
    }
    localStorage.setItem('bottons', JSON.stringify({stopTimer: this.stopTimer, pauseButton: this.pauseButton, detenerBtn: this.detenerBtn}));
  }
}

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

  ngOnInit(){}

  start(){
    this.stopTimer = true;
    this.pauseButton = false;
    this.detenerBtn = false;
    this.timerUnsuscribe = this.clockService.clock().subscribe((data:any) => {
      this.actualTime = data;
      this.eventbus.trigger("tiempo", "tiempo",  this.actualTime);
      this.clockService.start();
    })
  }

  pause(){
    this.timerUnsuscribe.unsubscribe();
    this.stopTimer=false;
    this.pauseButton = true;
    this.detenerBtn = true;
  }

  stop(){
    this.timerUnsuscribe.unsubscribe();
    if(this.detenerBtn){
      this.clockService.timeRemaining = 0;
      this.actualTime = "00:00:00";
      this.detenerBtn = false;
      this.pauseButton = false;
      this.clockService.end();
      console.log(this.studentsService.getPeople(), "Personas al detener");
      //this.studentsService.copy(...this.studentsService.getPeople());
      setTimeout(() => {
        this.studentsService.clear();
      }, 3000)
    }
  }
}

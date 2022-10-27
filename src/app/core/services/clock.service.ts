import { Injectable } from '@angular/core';
import { map, Observable, timer, tap, BehaviorSubject} from 'rxjs';
import { EventBusService } from './event-bus.service';

@Injectable({
  providedIn: 'any'
})
export class ClockService {
  public subjectTimer = new BehaviorSubject<boolean>(false);
  timerObs$ = this.subjectTimer.asObservable();

  timeRemaining: number = 0;
  constructor(private eventbus: EventBusService) { }

  start(){
    this.eventbus.trigger("reloj", "reloj", true);
    this.subjectTimer.next(true);
  }

  end(){
    console.log("Termino?");
    this.eventbus.trigger("reloj", "reloj", false);
    this.subjectTimer.next(false);
  }

  // toIsoString
  clock(actualDate: string = "00:00:00"): Observable<string | null> {
    //let clock = new Date().setHours(0, 0, 0, 0);
    //console.log(clock);
    let timeDisplayed = actualDate.split(":");
    let timerInitial = Number.parseInt(timeDisplayed[0]) * 3600 + Number.parseInt(timeDisplayed[1]) * 60 +Number.parseInt(timeDisplayed[2]);

    console.log(timerInitial, "Time initial");
    return timer(timerInitial, 1000).pipe(
      map(() => {
        this.timeRemaining = this.timeRemaining + 1000;
        return this.msToTime(this.timeRemaining);
        // or
        // return this.msToTime(this.getMsDiff(futureDate));
      })
    );
  }


  private msToTime(msRemaining: number): string | null {
    if (msRemaining < 0) {
      console.info('No Time Remaining:', msRemaining);
      return null;
    }

    let seconds: string | number = Math.floor((msRemaining / 1000) % 60),
      minutes: string | number = Math.floor((msRemaining / (1000 * 60)) % 60),
      hours: string | number = Math.floor((msRemaining / (1000 * 60 * 60)) % 24);

    /**
     * Add the relevant `0` prefix if any of the numbers are less than 10
     * i.e. 5 -> 05
     */
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    hours = (hours < 10) ? '0' + hours : hours;

    return `${hours}:${minutes}:${seconds}`;
  }

  private getMsDiff = (futureDate: string): number => (+(new Date(futureDate)) - Date.now());
}

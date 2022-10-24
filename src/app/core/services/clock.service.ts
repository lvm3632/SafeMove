import { Injectable } from '@angular/core';
import { map, Observable, timer, tap} from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class ClockService {
  constructor() { }
  timeRemaining: number = 0;

  // toIsoString
  clock(futureDate: string = "2022-10-24T00:00:00.000z"): Observable<string | null> {
    //let clock = new Date().setHours(0, 0, 0, 0);
    //console.log(clock);

    return timer(0, 1000).pipe(
      map(() => {
        this.timeRemaining = this.timeRemaining + 1000;
        return this.msToTime(this.timeRemaining);
        // or 
        // return this.msToTime(this.getMsDiff(futureDate));
      }),
      tap(console.log)
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

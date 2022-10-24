import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  //Mediator
  constructor() {
    console.log("Event bus creado")
  }

  private eventHandle: { [key: string]: Subject<any> } = {};

  private parseKey(modCode: string, event: string): string {
    return modCode + '.' + event;
  }
  /**
   * @description
   * @template T
   * @param {string} modCode Identifier e.g. "all", "assessment"
   * @param {string} eventIdentifier Event that brings something e.g. "getYearMinAndMax", "getQuarterAndYear"
   * @returns {Observable<T>}
   *    this.eventbus.trigger('assessments', Events.getQuarterAndYear, <value>);
   *    this.test = this.eventbus.on("assessments", Events.getQuarterAndYear);
   *    At template: this.test | async as data
   *    At component: this.test.subscribe((data:any) => {console.log(data)})
   */
  on<T>(modCode: string, event: string): Observable<T | any> {
    const key = this.parseKey(modCode, event);
    if (!(key in this.eventHandle)) {
      this.eventHandle[key] = new Subject<T>();
    }
    return this.eventHandle[key];
  }

  trigger<T>(modCode: string, event: string, data: T) {
    console.log(event, modCode, data, 'from trigger');
    const key = this.parseKey(modCode, event);
    if (key in this.eventHandle) {
      this.eventHandle[key].next(data);
    }
  }
}

export enum Events {
  getYear = 'getYear',
}

export enum Group {
  ALL = 'all',
}

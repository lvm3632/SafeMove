import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, delay } from 'rxjs/operators';

@Injectable()
export class MessagesService {
  private subject = new BehaviorSubject<any[]>([]);
  public errors$: Observable<any[]> = this.subject.asObservable().pipe(
    filter((messages: any) => messages && messages.length > 0),
    delay(2000)
  );

  private subjectSuccess = new BehaviorSubject<any[]>([]);
  public success$: Observable<any[]> = this.subjectSuccess
    .asObservable()
    .pipe(filter((messages: any) => messages && messages.length > 0));

  showErrors(...errors: any[]) {
    this.subject.next(errors);
  }

  showSuccess(...success: any[]) {
    this.subjectSuccess.next(success);
  }
}

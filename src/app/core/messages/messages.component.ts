import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessagesService } from './messages.service';
@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  public showMessagesError = true;
  public showMessagesSuccess = true;
  public errors$!: Observable<any[]>;
  public success$!: Observable<any[]>;
  public errors: any[] = [];
  public success: any[] = [];
  constructor(public messagesService: MessagesService) {}
  ngOnInit(): void {
    this.errors$ = this.messagesService.errors$;
    this.success$ = this.messagesService.success$;
    this.showMessagesError = true;
    this.showMessagesSuccess = true;
    this.messages();
  }

  messages() {
    this.errors$.subscribe((data) => {
      if (data) {
        this.errors = data;
      }
      setTimeout(() => {
        this.showMessagesError = true;
        this.onCloseError();
      }, 6000);
      this.showMessagesError = true;
    });
    this.success$.subscribe((data) => {
      if (data) {
        this.success = data;
      }
      setTimeout(() => {
        this.showMessagesSuccess = true;
        this.onCloseSuccess();
      }, 6000);
      this.showMessagesSuccess = true;
    });
  }

  onCloseError() {
    this.showMessagesError = false;
  }
  onCloseSuccess() {
    this.showMessagesSuccess = false;
  }
}

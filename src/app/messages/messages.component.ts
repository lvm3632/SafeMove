import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToStudent(){
    this.router.navigate([
      { outlets: { primary: ['welcome'], mensajes: ['details', 1] } },
    ]);
  }
}

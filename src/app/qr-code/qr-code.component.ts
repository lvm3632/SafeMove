import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnInit {
  urlQR =  window.location.origin + '/welcome';
  constructor() { }
  ngOnInit(): void {}
}

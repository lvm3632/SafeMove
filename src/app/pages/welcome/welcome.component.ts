import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bufferCount, concatMap, Observable } from 'rxjs';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: any;
  count = 2;
  array = new Array(this.count);
  constructor(private http: HttpClient,
    private message: NzMessageService,
    private notification: NzNotificationService) {
    this.chartOptions = {
      series: [
        {
          name: 'My-series',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      title: {
        text: 'My First Angular Chart',
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
      },
    };
  }

  obsCheckInternet$ = new Observable();

  getRandomNumber() {
    return (Math.floor(Math.random() * (200 - 100 + 1)) + 100).toString();
  }
  ngOnInit() {
    this.obsCheckInternet$ = this.http.get(`https://picsum.photos/v2/list?page=${this.getRandomNumber()}&limit=4`);
  }

  data: any[] = [];
  checkInternet() {
    this.data = [];
    this.obsCheckInternet$.subscribe((
      {
        next: (data: any) => {
          this.data  = data.slice(0,4);
          console.log(this.data, "DATa?")
          this.startShowMessages("Disfruta de imágenes aleatorias de Internet");
        },
        error: (error: any) => {
          this.startShowMessages("No hay internet, pero todo en cache!");
        },
      }
    ))
      this.obsCheckInternet$ = this.http.get(`https://picsum.photos/v2/list?page=${this.getRandomNumber()}&limit=4`);

  }

  startShowMessages(content: string): void {
    this.message
      .loading('Haciendo una petición de tipo get...', { nzDuration: 1500 })
      .onClose!.pipe(
       // concatMap(() => this.message.success('Service worker', { nzDuration: 1500 }).onClose!)
        //concatMap(() => this.message.info('Loading finished is finished', { nzDuration: 1500 }).onClose!)
      )
      .subscribe({
        next: (data:any) => {
        setTimeout(() => {
          //this.createBasicNotification(content);
          this.message.success('Service worker: ' + content);
        }, 1000);
      },
      error: (error:any) => {
          this.createBasicNotification('Error service worker' + content);
      }
      });
  }

  createBasicNotification(content: string): void {
    this.notification
      .blank(
        'Service worker',
        `${content}`
      )
      .onClick.subscribe(() => {
        console.log('notification clicked!');
      });
  }
}

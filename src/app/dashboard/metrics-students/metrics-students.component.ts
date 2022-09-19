import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-metrics-students',
  templateUrl: './metrics-students.component.html',
  styleUrls: ['./metrics-students.component.scss'],
})
export class MetricsStudentsComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: any;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Cantidad',
          data: [24, 12],
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
        events: {},
      },
      colors: ['#11A100', '#304758'],
      plotOptions: {
        bar: {
          columnWidth: '50%',
          distributed: true,
        },
      },
      dataLabels: {
        enabled: true,
      },
      legend: {
        show: true,
      },
      grid: {
        show: true,
      },
      xaxis: {
        categories: [
          ['Resguardados'],
          ['Pendiente'],
        ],
        labels: {
          style: {
            colors: ['#444', '#444'],
            fontSize: '14px',
            fontWeight: 600,
          },
        },
      },
    };
  }

  ngOnInit(): void {}
}

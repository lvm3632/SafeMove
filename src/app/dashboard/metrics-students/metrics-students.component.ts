import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { StudentsService } from '../../core/services/students.service';
import { IStudent } from '../../models/students.model.interface';
import { EventBusService } from '../../core/services/event-bus.service';

@Component({
  selector: 'app-metrics-students',
  templateUrl: './metrics-students.component.html',
  styleUrls: ['./metrics-students.component.scss'],
})
export class MetricsStudentsComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: any;
  aSalvo: number = this.studentsService.personas.filter((item: IStudent) => item.state == true)?.length;
  pendientes: number = this.studentsService.personas.filter((item: IStudent) => item.state == false)?.length;;

  ngOnInit(): void {
    this.eventBusService.on("metricas", "metricas").subscribe((data: IStudent[]) => {
      this.aSalvo = data.filter((item: IStudent) => item.state == true)?.length;
      this.pendientes = data.filter((item: IStudent) => item.state == false)?.length;
      this.paintGraph();
    })
  }

  constructor(private studentsService: StudentsService, private eventBusService:EventBusService) {
    this.paintGraph();
  }

  paintGraph(){
       this.chartOptions = {
      series: [
        {
          name: 'Cantidad',
          data: [this.aSalvo, this.pendientes],
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
}

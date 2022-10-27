import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EventBusService } from 'src/app/core/services/event-bus.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { concatMap } from 'rxjs/operators';
import { StudentsService } from 'src/app/core/services/students.service';
import { IStudent } from '../../models/students.model.interface';
import { ClonerService } from '../../core/services/cloner.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-form-status',
  templateUrl: './form-status.component.html',
  styleUrls: ['./form-status.component.scss']
})
export class FormStatusComponent implements OnInit {
  validateForm!: FormGroup;
  activeTimer:boolean = false;
  disabledInputs: boolean = false;
  fullName: FormControl = new FormControl({value: '', disabled: this.disabledInputs}, [Validators.required]);
  idStudent: FormControl = new FormControl({value: '', disabled: this.disabledInputs}, [Validators.required, Validators.pattern("(A|a|l|L)[0-9]{8}")]);
  room: FormControl = new FormControl({value: '', disabled: this.disabledInputs});
  actualTimer: string = "";
  clicked: boolean = false;
  loading: boolean = false;

  constructor(private fb: FormBuilder,
    private eventbus: EventBusService,
    private message:NzMessageService,
    private students: StudentsService,
    private cloner: ClonerService,
    private notification: NzNotificationService) {}

  ngOnInit(): void {
     this.validateForm = this.fb.group({
       fullName: this.fullName,
       idStudent: this.idStudent,
       room: this.room,
       area: [{value: '', disabled: this.disabledInputs}, Validators.required]
     });

    this.eventbus.on("reloj", "reloj").subscribe((data:boolean) => {
      this.activeTimer = data;
    })

    this.eventbus.on("tiempo", "tiempo").subscribe((data:any) => {
      console.log(data, "Tiempo");
      this.actualTimer = data;
    });

    

  }

  submitForm() {
    console.log(this.validateForm.status, "Form");
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      //this.loading = true;
      this.clicked = true;
      let obj = this.validateForm.getRawValue();
      this.startShowMessages(obj);
      obj.timer = this.actualTimer;
      console.log(obj, "tiempo");
      let index = this.students.personas.findIndex((item:IStudent) => item.idStudent.toLocaleUpperCase() == obj.idStudent.toLocaleUpperCase());
      if(index != -1){
        obj.state = true;
        this.students.personas[index] = this.cloner.deepClone(obj);
        this.eventbus.trigger("metricas", "metricas", this.students.personas);
        console.log(obj);
      }else{
        this.students.add(obj);
      }

      localStorage.setItem('in-progress', JSON.stringify(this.students.personas));
      setTimeout(() => {
        this.validateForm.reset();
        this.clicked = false;
       // this.loading = false;
      },2000);
    } else {
      Object.values(this.validateForm.controls).forEach((control : AbstractControl) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  areaChange($event:any){
    console.log($event);
  }

  startShowMessages(obj: IStudent): void {
    this.message
      .loading('Enviando datos ...', { nzDuration: 1500 })
      .onClose!.pipe(
        concatMap(() => this.message.success('Registro completado!', { nzDuration: 1500 }).onClose!)
        //concatMap(() => this.message.info('Loading finished is finished', { nzDuration: 1500 }).onClose!)
      )
      .subscribe(() => {
        console.log('All completed!');
       this.eventbus.trigger("people", "people", this.students.personas);
        let content = obj.idStudent + " - " + obj.fullName.toString() + " - " + obj.area.toString();
       setTimeout(() => {
        this.createBasicNotification(content);
       },1000);
      });
  }

    createBasicNotification(content: string): void {
    this.notification
      .blank(
        'Último registro',
        `${content}`
      )
      .onClick.subscribe(() => {
        console.log('notification clicked!');
      });
  }


}

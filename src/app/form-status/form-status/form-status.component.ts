import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessagesService } from 'src/app/core/messages/messages.service';
import { EventBusService } from 'src/app/core/services/event-bus.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { concatMap } from 'rxjs/operators';
import { StudentsService } from 'src/app/core/services/students.service';
import { ClockService } from 'src/app/core/services/clock.service';

@Component({
  selector: 'app-form-status',
  templateUrl: './form-status.component.html',
  styleUrls: ['./form-status.component.scss']
})
export class FormStatusComponent implements OnInit {
  customPatterns = { 'S': { pattern: new RegExp('^(?:[A-Z][^\s]*\s?)+$')} };
  validateForm!: FormGroup;
  activeTimer:boolean = false;

  fullName: FormControl = new FormControl('', [Validators.required]);
  idStudent: FormControl = new FormControl('', [Validators.required, Validators.pattern("(A|a|l|L)[0-9]{8}")]);
  room: FormControl = new FormControl('');

  actualTimer: string = "";
  constructor(private fb: FormBuilder,
    private eventbus: EventBusService,
    private messages: MessagesService,
    private message:NzMessageService,
    private students: StudentsService,
    private clockService: ClockService) {}

  ngOnInit(): void {
     this.validateForm = this.fb.group({
       fullName: this.fullName,
       idStudent: this.idStudent,
       room: this.room,
       area: ['', Validators.required]
     });

     
    this.eventbus.on("reloj", "reloj").subscribe((data:boolean) => {
      this.activeTimer = data;
    })  

    this.eventbus.on("tiempo", "tiempo").subscribe((data:any) => {
      console.log(data, "Tiempo");
      this.actualTimer = data;
    })

  }
  clicked: boolean = false;
  loading: boolean = false;
  submitForm() {
    console.log(this.validateForm.status, "Form");
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      //this.loading = true;
      this.clicked = true;
      this.startShowMessages(...this.students.personas);
      let obj = this.validateForm.getRawValue();
      obj.timer = this.actualTimer;
      console.log(obj, "tiempo");
      this.students.add(obj);

      setTimeout(() => {
        this.validateForm.reset();
        this.clicked = false;
       // this.loading = false;
      },2000);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
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

  startShowMessages(...people: any): void {
    this.message
      .loading('Enviando datos ...', { nzDuration: 1500 })
      .onClose!.pipe(
        concatMap(() => this.message.success('Registro completado!', { nzDuration: 1500 }).onClose!)
        //concatMap(() => this.message.info('Loading finished is finished', { nzDuration: 1500 }).onClose!)
      )
      .subscribe(() => {
        console.log('All completed!');
       this.eventbus.trigger("people", "people", this.students.personas);
      });
  }
  
}

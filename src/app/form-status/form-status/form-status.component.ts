import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventBusService } from 'src/app/core/services/event-bus.service';

@Component({
  selector: 'app-form-status',
  templateUrl: './form-status.component.html',
  styleUrls: ['./form-status.component.scss']
})
export class FormStatusComponent implements OnInit {
  customPatterns = { 'S': { pattern: new RegExp('^(?:[A-Z][^\s]*\s?)+$')} };
  validateForm!: FormGroup;
  activeTimer:boolean = false;

  constructor(private fb: FormBuilder,
    private eventbus: EventBusService) {}

  ngOnInit(): void {
     this.validateForm = this.fb.group({
       name: [null, [Validators.required]],
       gender: [null, [Validators.required]],
       note: [null]
     });

    this.validateForm.valueChanges.subscribe((data:any) => {
      console.log(data, "info");
    })

    this.eventbus.on("reloj", "reloj").subscribe((data:boolean) => {
      console.log(data, "Se escucha?")
      this.activeTimer = data;
    })  
  }

  submitForm() {}

  genderChange($event:any){
  
    console.log($event, "Form")
  }


 
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-status',
  templateUrl: './form-status.component.html',
  styleUrls: ['./form-status.component.scss'],
})
export class FormStatusComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
     this.validateForm = this.fb.group({
       note: [null, [Validators.required]],
       gender: [null, [Validators.required]],
     });
  }

  submitForm() {}

  genderChange($event:any){
    console.log($event, "Form")
  }
}

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
       name: [null, [Validators.required]],
       gender: [null, [Validators.required]],
       note: [null]
     });

    this.validateForm.valueChanges.subscribe((data:any) => {
      console.log(data, "info");
    })
  }
  public customPatterns = { 'S': { pattern: new RegExp('^(?:[A-Z][^\s]*\s?)+$')} };


  submitForm() {}

  genderChange($event:any){
    console.log($event, "Form")
  }
}

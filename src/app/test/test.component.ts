import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { IEmployee } from './employee';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {

  

  constructor(private fb: FormBuilder) {

  }

  myForm : FormGroup = this.fb.group({
    name: [''],
    email:  [''],
    message:  ['']
  });

  onSubmit() {
    // Handle form submission here
    console.log('Form Data:', this.myForm.value);
  }
  

}

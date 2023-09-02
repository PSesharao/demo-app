import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { IEmployee } from './employee';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {

  myForm : FormGroup = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl(''),
  });

  onSubmit() {
    // Handle form submission here
    console.log('Form Data:', this.myForm.value);
  }
  

}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { IEmployee } from './employee';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {

  formData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    // Handle form submission here
    console.log('Form Data:', this.formData);
  }
  
}

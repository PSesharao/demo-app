import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { IEmployee } from './employee';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {

  constructor(private _dataService : DataService ){}
  
  public employees : IEmployee[] = [];

  public errorMsg : string = '' ; 

  ngOnInit(){
     this._dataService.getEmployees().subscribe(
      data =>  this.employees = data ,
      error => this.errorMsg = error
    )
  }
}

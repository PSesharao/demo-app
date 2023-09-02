import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {

  constructor(private _dataService : DataService ){}
  
  items: string[] = [];

  ngOnInit(): void {
    this.items = this._dataService.getData();
  }

  addItem(): void {
    this._dataService.addData('New Item');
    this.items = this._dataService.getData(); // Refresh the list
  }

}

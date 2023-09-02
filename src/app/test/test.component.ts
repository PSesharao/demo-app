import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {

  @Input() parentData!: string;

  childData = "Hello from Child!";

  @Output() childEvent = new EventEmitter<string>();

  sendMessage() {
    this.childEvent.emit(this.childData);
  }

}

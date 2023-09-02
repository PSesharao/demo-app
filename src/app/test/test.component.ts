import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {

  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

}

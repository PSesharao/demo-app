import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {

  public name = 'Sesh' ; 

  public greeting = '' ; 

  Log( refVarible : any ){
    console.log(refVarible.value)
  }
}

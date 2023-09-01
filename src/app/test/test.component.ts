import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {

  public name = "Sesh"

  public textspecial = "text-special" 

  public textdanger = "text-danger" 

  public isSpecial = true ;
  
  public isDanger = true ; 

  public isboldClass = true ; 
  public isitalicClass = true ; 
  public iscolorClass = true ; 

  public messageClasses = {
    "boldClass" : this.isboldClass , 
    "italicClass" : this.isitalicClass , 
    "colorClass" : this.iscolorClass 
  }


  greetUser(){
    return "Hello " + this.name ; 
  }
}

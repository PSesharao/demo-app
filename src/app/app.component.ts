import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'demo-app-angular';

  public message: string = "Hello from Parent!";

  public childMessage!: string;

  receiveMessage(event: any) {

    this.childMessage = event;

  }

}

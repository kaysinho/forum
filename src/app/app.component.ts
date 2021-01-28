import { Component } from '@angular/core';

declare var $ : any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forum';
  constructor(){
    setTimeout(() => {
      $(".dropdown-trigger").dropdown();
    }, 2000);
  }
}

import { Component } from '@angular/core';

declare var M: any;
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forum';
  constructor() {
    setTimeout(() => {
      $("#dropdownTrigger1").dropdown();
      $("#dropdownTrigger2").dropdown();
      let elems = document.querySelectorAll('.sidenav');
      let instances = M.Sidenav.init(elems, {});
    }, 2000);
  }
}

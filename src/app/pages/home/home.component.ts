import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/models/state.model';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  states: Array<State> = []
  constructor(private stateService:StateService) { }

  ngOnInit(): void {
    this.getStates()
  }

  getStates(){
    this.states = this.stateService.get()
  }

}

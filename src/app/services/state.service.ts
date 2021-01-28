import { Injectable } from '@angular/core';
import { State } from '../models/state.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private key : string = "States";
  private states : Array<State> = localStorage.getItem(this.key) ? JSON.parse(localStorage.getItem(this.key)) : [];
  constructor() { }

  post(message:string, user: number){
    let date : Date = new Date();
    const comment : State = {
      id : date.getTime(),
      message: message,
      idUser: user,
      date : date
    }

    this.states.push(comment);

    localStorage.setItem(this.key, JSON.stringify(this.states))
  }

  get():Array<State>{
    return this.states;
  }
}

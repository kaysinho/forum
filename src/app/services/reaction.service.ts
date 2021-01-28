import { Injectable } from '@angular/core';
import { Reaction } from '../models/reaction.model';

@Injectable({
  providedIn: 'root'
})
export class ReactionService {
  private key : string = "Reactions";
  private reactions : Array<Reaction> = localStorage.getItem(this.key) ? JSON.parse(localStorage.getItem(this.key)) : [];

  constructor() { }

  post(type:string, stateId:number){
    this.reactions.push({type: type, idState: stateId})
    localStorage.setItem(this.key, JSON.stringify(this.reactions))
  }

  get(stateId:number):Array<Reaction>{
    return this.reactions.filter(r => r.idState == stateId);
  }

  exist(type:string, stateId:number):boolean{
    return this.reactions.some(r => r.type == type && r.idState==stateId)
  }
}

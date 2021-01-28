import { Injectable } from '@angular/core';
import { Comment } from './../models/comment.model'
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private key : string = "Comments";
  private comments : Array<Comment> = localStorage.getItem(this.key) ? JSON.parse(localStorage.getItem(this.key)) : [];
  constructor() { 
    this.get()
  }

  post(message:string, idState:number, idUser:number){
    let date : Date = new Date();
    const comment : Comment = {
      id : date.getTime(),
      message: message,
      idState: idState,
      idUser: idUser,
      date : date
    }

    this.comments.push(comment);

    localStorage.setItem(this.key, JSON.stringify(this.comments))
  }

  get(){
    this.comments = localStorage.getItem(this.key) ? JSON.parse(localStorage.getItem(this.key)) : [];
  }

  getByStateId(idState:number): Array<Comment>{
    return this.comments.filter(c => c.idState==idState)
  }

  getById(id:number):Comment{
    return this.comments.filter(c => c.id==id)[0]
  }
}

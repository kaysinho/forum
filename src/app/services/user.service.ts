import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users : Array<User> = [
    {id: 1, name: "Jhonatan Plata"},
    {id: 2, name: "John Doe"},
    {id: 3, name: "Katy Jones"},
    {id: 4, name: "Anne Smith"}
  ]
  private key : string = "User";
  private user:User;
  constructor() { }

  get():Array<User>{
    return this.users;
  }

  getById(id:number):User{
    return this.users.filter(u => u.id==id)[0];
  }

  userSelected():User{
    this.user = localStorage.getItem(this.key) ? JSON.parse(localStorage.getItem(this.key)) : this.users[0]
    return this.user;
  }

  selectUser(user:User){
    this.user = user;
    localStorage.setItem(this.key, JSON.stringify(this.user))
  }
}

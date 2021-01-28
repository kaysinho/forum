import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  users : Array<User> = [];
  user : User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers()
    this.user = this.userService.userSelected()
  }

  getUsers(){
    this.users = this.userService.get()
  }

  selectUser(id:number){
    this.user = this.userService.getById(id);
    this.userService.selectUser(this.user)
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { StateService } from 'src/app/services/state.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-state',
  templateUrl: './new-state.component.html',
  styleUrls: ['./new-state.component.scss']
})
export class NewStateComponent implements OnInit {
  state : string = ""
  @Output() newStateEvent = new EventEmitter<boolean>();
  isMobile: boolean = false;

  constructor(private service : StateService, private userService:UserService) { }

  ngOnInit(): void {
    this.screenSize()
  }

  screenSize(){
    if(window.screen.width<=600){
      this.isMobile = true;
    }else{
      this.isMobile = false
    }
  }

  post(){
    this.service.post(this.state, this.userService.userSelected().id);
    this.state = ""
    this.newStateEvent.next(true)
  }
}

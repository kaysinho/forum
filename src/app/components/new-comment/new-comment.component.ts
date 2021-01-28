import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { State } from 'src/app/models/state.model';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {

  @Input() state: State;
  @Output() newCommentEvent = new EventEmitter<boolean>();

  message : string = "";
  constructor(private service : CommentService, private userService:UserService) { }

  ngOnInit(): void {
  }

  post(){
    this.service.post(this.message, this.state.id, this.userService.userSelected().id)
    this.message = ""
    this.newCommentEvent.next(true)
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Comment } from './../../models/comment.model'
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  getUserName():string{
    return this.userService.getById(this.comment.idUser).name;
  }

}

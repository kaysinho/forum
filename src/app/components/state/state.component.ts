import { Component, Input, OnInit } from '@angular/core';
import { State } from 'src/app/models/state.model';
import { User } from 'src/app/models/user.model';
import { Comment } from 'src/app/models/comment.model';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';
import { ReactionService } from 'src/app/services/reaction.service';
import { Reaction } from 'src/app/models/reaction.model';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
  user:User;
  comments : Array<Comment> = [];
  reactions : Array<Reaction> = [];
  showComments : boolean = false;
  showReactions : boolean = false;
  @Input() state : State;
  constructor(private userService:UserService, 
    private commentService:CommentService,
    public reactionService:ReactionService) { }

  ngOnInit(): void {
    this.user = this.userService.getById(this.state.idUser)
    this.getComments()
    this.getReactions()
  }

  getComments(){
    console.log("Consulta comentarios")
    this.comments = this.commentService.getByStateId(this.state.id)
  }

  getReactions(){
    this.reactions = this.reactionService.get(this.state.id)
  }

  postReaction(type:string){
    this.reactionService.post(type, this.state.id)
    this.getReactions()
  }

}

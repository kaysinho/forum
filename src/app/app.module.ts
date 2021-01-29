import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewStateComponent } from './components/new-state/new-state.component';
import { StateComponent } from './components/state/state.component';
import { NewCommentComponent } from './components/new-comment/new-comment.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from './pipes/reverse.pipe';
import { CommentComponent } from './components/comment/comment.component';
import { TimePostPipe } from './pipes/time-post.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewStateComponent,
    StateComponent,
    NewCommentComponent,
    HomeComponent,
    ReversePipe,
    CommentComponent,
    TimePostPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

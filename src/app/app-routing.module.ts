import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '**', component: HomeComponent },  // Wildcard route for a 404 page
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

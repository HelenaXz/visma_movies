import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "./components/homepage/homepage.component";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component"; // CLI imports router

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

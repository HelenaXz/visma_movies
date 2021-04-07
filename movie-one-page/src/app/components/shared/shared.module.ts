import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {MovieItemComponent} from "./movie-item/movie-item.component";
import { MovieListComponent } from './movie-list/movie-list.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [HeaderComponent, MovieItemComponent, MovieListComponent],
  exports: [HeaderComponent, MovieItemComponent, MovieListComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }

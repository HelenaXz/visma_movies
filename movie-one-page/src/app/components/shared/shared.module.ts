import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import { SearchBarComponent } from './search-bar/search-bar.component';
import {MovieItemComponent} from "./movie-item/movie-item.component";
import { MovieListComponent } from './movie-list/movie-list.component';



@NgModule({
  declarations: [HeaderComponent, SearchBarComponent, MovieItemComponent, MovieListComponent],
  exports: [HeaderComponent, MovieItemComponent, MovieListComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

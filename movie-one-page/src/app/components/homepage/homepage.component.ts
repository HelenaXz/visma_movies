import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public trendingMovies$: Observable<any>;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.trendingMovies$ = this.movieService.getTrendingMovies();
    this.trendingMovies$.subscribe(data => {
      console.log(data)
    })
  }

}

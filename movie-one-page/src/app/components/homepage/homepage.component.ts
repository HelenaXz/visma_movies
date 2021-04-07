import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Observable} from "rxjs";
import {SearchResults} from "../shared/shared.types";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public trendingMovies$: Observable<SearchResults>;

  constructor(private movieService: MovieService) { }

  public ngOnInit(): void {
    this.trendingMovies$ = this.movieService.getTrendingMovies();
  }

}

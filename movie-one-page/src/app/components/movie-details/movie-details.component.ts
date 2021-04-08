import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {MoreInfoLabels, MovieDetailLabels} from "./movie-details.const";
import {map} from "rxjs/operators";
import {SharedUtils} from "../shared/shared.utils";
import {MovieDetailsItem, ValueLabel} from "../shared/shared.types";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  public movieItem$: Observable<MovieDetailsItem>;
  public valueLabels: ValueLabel[] = MovieDetailLabels;
  public moreInfoLabels: ValueLabel[] = MoreInfoLabels;

  private id: number;

  constructor(private movieService: MovieService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params.id;
    })
  }

  public ngOnInit(): void {
    this.movieItem$ = this.movieService.getMovie(this.id).pipe(map(movie => {
      movie.genreString = SharedUtils.joinArrayIntoString(movie.genres, ', ', 'name');
      movie.productionCountryString = SharedUtils.joinArrayIntoString(movie.production_countries, ', ', 'name');
      movie.productionCompanyString = SharedUtils.joinArrayIntoString(movie.production_companies, ', ', 'name');

      return movie;
    }));
  }

  public getImageUrl(path: string): string {
    return path ? `https://image.tmdb.org/t/p/w500${path}` : 'assets/images/movie-placeholder.png';
  }

}

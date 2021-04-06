import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  private id: number;

  public movieItem$: Observable<any>

  constructor(private movieService: MovieService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params.id;
    })
  }

  ngOnInit(): void {
    this.movieItem$ = this.movieService.getMovie(this.id);
  }

  getUrl(path) {
    return `url('https://image.tmdb.org/t/p/w500${path}')`
  }

}

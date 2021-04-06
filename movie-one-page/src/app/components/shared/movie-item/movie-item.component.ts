import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from "../../../services/movie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() item: any;

  constructor(private movieService: MovieService,
              private router: Router) { }

  ngOnInit(): void {
  }

  getUrl() {
    return `url('https://image.tmdb.org/t/p/w300${this.item.backdrop_path}')`
  }

  getGenreNames(genre_ids: number[]): string {
    const result = [];
    genre_ids.map(id =>{
      const name = this.movieService.getGenreNameFromId(id);
      if (name) {
        result.push(name)
      }
    })
    return result.join(', ')
  }

  openItem() {
    this.router.navigate(['/movie', this.item.id])
  }
}

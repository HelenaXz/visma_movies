import {Component, Input} from '@angular/core';
import {MovieService} from "../../../services/movie.service";
import {Router} from "@angular/router";
import {MovieCardItem} from "../shared.types";

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {
  @Input() item: MovieCardItem;

  constructor(private movieService: MovieService,
              private router: Router) { }

  public getBackgroundUrl(): string {
    return  this.item.backdrop_path ? `url('https://image.tmdb.org/t/p/w300${this.item.backdrop_path}')` : `url('https://betravingknows.com/wp-content/uploads/2017/06/video-movie-placeholder-image-grey.png)`
  }

  public getGenreNames(genre_ids: number[]): string {
    const result = [];
    genre_ids.map(id =>{
      const name = this.movieService.getGenreNameFromId(id);
      if (name) {
        result.push(name)
      }
    })
    return result.join(', ');
  }

  public openItem(): void {
    this.router.navigate(['/movie', this.item.id])
  }
}

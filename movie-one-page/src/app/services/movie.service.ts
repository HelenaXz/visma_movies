import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private genres

  constructor(private http: HttpClient) {
    this.getGenres();
  }

  public getTrendingMovies(): Observable<any> {
    return this.http.get<any>('https://api.themoviedb.org/3/trending/all/day?api_key=d72c51181f088a9be60f724e8ddfaeb8')
  }
  public getGenres(): void {
    this.http.get<any>('https://api.themoviedb.org/3/genre/movie/list?api_key=d72c51181f088a9be60f724e8ddfaeb8').subscribe(data => {
      this.genres = data.genres;
    })
  }

  public getGenreNameFromId(id): string {
    return this.genres.find(g => g.id === id) ? this.genres.find(g => g.id === id).name : null;
  }
}
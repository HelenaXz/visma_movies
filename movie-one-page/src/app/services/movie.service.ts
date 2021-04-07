import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Genre, MovieDetailsItem, SearchResults} from "../components/shared/shared.types";
import {GLOBAL} from "../components/shared/shared.const";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private genres: Genre[];

  constructor(private http: HttpClient) {
    this.getGenres();
  }

  public getTrendingMovies(): Observable<SearchResults> {
    return this.http.get<SearchResults>(`${GLOBAL.baseUrl}/trending/movie/day?${GLOBAL.apiKey}`)
  }
  public getGenres(): void {
    this.http.get<any>(`${GLOBAL.baseUrl}/genre/movie/list?${GLOBAL.apiKey}`).subscribe(data => {
      this.genres = data.genres;
    })
  }
  public getMovie(id): Observable<MovieDetailsItem> {
    return this.http.get<MovieDetailsItem>(`${GLOBAL.baseUrl}/movie/${id}?${GLOBAL.apiKey}`);
  }

  public getGenreNameFromId(id): string {
    return this.genres && this.genres.find(g => g.id === id) ? this.genres.find(g => g.id === id).name : null;
  }
}

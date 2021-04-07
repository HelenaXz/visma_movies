import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {SearchResults} from "../components/shared/shared.types";
import {GLOBAL} from "../components/shared/shared.const";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public searchString$ = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {
  }

  public searchMovies(value: string, page: number = 1): Observable<SearchResults> {
    return this.http.get<SearchResults>(`${GLOBAL.baseUrl}/search/movie?${GLOBAL.apiKey}&query=${encodeURIComponent(value)}&page=${page}`)
  }

  public setSearchString(value: string): void {
    this.searchString$.next(value)
  }

}

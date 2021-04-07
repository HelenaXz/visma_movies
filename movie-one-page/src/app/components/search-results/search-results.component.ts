import {Component, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";
import {SearchService} from "../../services/search.service";
import {Observable, Subject} from "rxjs";
import {SearchResults} from "../shared/shared.types";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnDestroy{
  public searchResults$: Observable<SearchResults>;
  public searchString = '';
  public page = 1;

  private unsubscribe = new Subject();

  constructor(private router: Router, private searchService: SearchService) {
    this.searchService.searchString$.pipe(takeUntil(this.unsubscribe)).subscribe(value => {
      this.searchString = value;
      if (value.length > 0) {
        this.searchResults$ = this.searchService.searchMovies(value);
      }
    })
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public onPageChange($event): void {
    this.searchResults$ = this.searchService.searchMovies(this.searchString, $event);
  }
}

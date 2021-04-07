import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SearchService} from "../../../services/search.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchValue: any = '';

  constructor(private router: Router, private searchService: SearchService) { }

  ngOnInit(): void {
  }

  navigateAndSearch(): void {
    if (!this.router.url.includes('/results')) {
      this.router.navigate(['/results']);
    }-
    this.searchService.setSearchString(this.searchValue)
    this.searchValue = '';
  }
}

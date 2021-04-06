import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() items: any;

  constructor() { }

  ngOnInit(): void {
  }

}

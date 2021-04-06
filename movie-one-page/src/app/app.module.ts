import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AppRoutingModule } from "./app-routing.module";
import {SharedModule} from "./components/shared/shared.module";
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import {HttpClientModule} from "@angular/common/http";
import {SearchResultsComponent} from "./components/search-results/search-results.component";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MovieDetailsComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

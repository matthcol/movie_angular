import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';

import { SharedModule } from 'src/app/modules/shared/shared.module'

import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { MovieDashboardComponent } from './components/movie-dashboard/movie-dashboard.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';


@NgModule({
  declarations: [
    MovieCardComponent, 
    MovieListComponent, 
    MovieFormComponent, 
    MovieDashboardComponent, 
    MovieDetailComponent, 
    MovieSearchComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule
  ]
})
export class MovieModule { }

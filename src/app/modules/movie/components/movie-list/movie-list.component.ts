import { Component, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { Movie } from '../../models/movie';
// import { MOVIES } from '../../mock/movies.mock';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MovieService } from '../../services/movie.service';
import  { MovieCardComponent } from '../movie-card/movie-card.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, AfterViewInit {

  movies : Movie[];
  movies$ : Observable<Movie[]>;

  @ViewChildren(MovieCardComponent)
  movieCards: QueryList<MovieCardComponent>;

  // inject @Injectable class
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  ngAfterViewInit(): void {
    // acces a l'API query avec du map/reduce
    console.log(this.movieCards.first);
  }

  loadProducts(): void {
    // 1. short way: mock data
    // this.movies = MOVIES; // mock data
    // 2. access api directly
    // this.http.get('http://localhost:3004/movies').toPromise().then(
    // 3. access data via service layer
    this.movieService.getMoviesAsPromise().then(
       data => this.movies = data
    )
  }

  // loadProductsAsync(): void {
  //   this.movies$ = this.movieService.getMoviesAsObservable();
  // }

}

import { Component, OnInit, QueryList, ViewChildren, AfterViewInit  } from '@angular/core';
import { Movie } from '../../models/movie';
import { MOVIES } from '../../mock/movies.mock';
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
    // this.movies = MOVIES; // mock data
    this.loadProducts();
  }

  ngAfterViewInit(): void {
    // acces a l'API query avec du map/reduce
    console.log(this.movieCards.first);
  }

  loadProducts(): void {
    // this.http.get('http://localhost:3004/movies').toPromise().then(
    this.movieService.getMoviesAsPromise().then(
      data => this.movies = data
    )
  }

  loadProductsAsync(): void {
    this.movies$ = this.movieService.getMoviesAsObservable();
  }

}

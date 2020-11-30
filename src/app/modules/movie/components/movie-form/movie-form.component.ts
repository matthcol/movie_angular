import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {

  @Output() newMovie = new EventEmitter<Movie>();
  movie: Movie = {} as Movie;

  constructor() { }

  ngOnInit(): void {
  }

  submitMovie(): void {
    // opt. validate movie
    console.log('submitMovie');
    this.newMovie.emit(
      this.movie
      // { title: 'A new Movie', year: 2020, duration: null, poster: null }
    );
  }


}

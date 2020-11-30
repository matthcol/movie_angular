import { Component, OnInit, ViewChild } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent implements OnInit {

  @ViewChild(MovieListComponent)   // accès au composant fils
  movieListComp: MovieListComponent;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  addMovie(m: Movie){   
    let m2 = this.movieService.createMovie(m)
    this.movieListComp.movies.push(m); //m2);
    console.log('Add Movie:');
    console.log(m2);
  }

}

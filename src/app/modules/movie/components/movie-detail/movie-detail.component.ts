import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie: Movie; // with full details

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
    ) { }

  ngOnInit(): void {
    this.loadMovie();
  }

  loadMovie(): void {
    const idStr = this.route.snapshot.paramMap.get('id');
    const id = +idStr;
    // do http
    this.movieService.getMovieAsPromise(id).then(
      data => this.movie = data
    )
  }

}

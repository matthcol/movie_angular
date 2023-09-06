import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';
import { environment } from 'src/environments/environment'; // swith auto avec .prod en prod
import { Observable } from 'rxjs';

const endpoint = '/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovieAsPromise(id: number): Promise<Movie>{
    return this.http.get<Movie>(`${environment.apiBaseUrl}${endpoint}/${id}`).toPromise();
  }

  getMoviesAsPromise(): Promise<Movie[]> {
    return this.http.get<Movie[]>(`${environment.apiBaseUrl}${endpoint}`).toPromise();
  }

  getMoviesAsObservable(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${environment.apiBaseUrl}${endpoint}`);
  }

  createMovie(m: Movie): Observable<Movie> {
    console.log("send http post to create movie:");
    console.log(m);
    return this.http.post<Movie>(`${environment.apiBaseUrl}${endpoint}`, m);
  }
}

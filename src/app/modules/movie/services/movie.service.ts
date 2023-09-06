import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../models/movie';
import { environment } from 'src/environments/environment'; // swith auto avec .prod en prod
import { Observable } from 'rxjs';

const endpoint = '/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private auth_header: HttpHeaders;

  constructor(private http: HttpClient) { 
    let password: string = btoa(`admin:password`);
    this.auth_header = new HttpHeaders(`Authorization: Basic ${password}`)
  }

  getMovieAsPromise(id: number): Promise<Movie>{
    return this.http.get<Movie>(`${environment.apiBaseUrl}${endpoint}/${id}`, {headers: this.auth_header}).toPromise();
  }

  getMoviesAsPromise(): Promise<Movie[]> {
    return this.http.get<Movie[]>(`${environment.apiBaseUrl}${endpoint}`,{headers: this.auth_header}).toPromise();
  }

  getMoviesAsObservable(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${environment.apiBaseUrl}${endpoint}`, {headers: this.auth_header});
  }

  createMovie(m: Movie): Observable<Movie> {
    console.log("send http post to create movie:");
    console.log(m);
    return this.http.post<Movie>(`${environment.apiBaseUrl}${endpoint}`, m, {headers: this.auth_header});
  }
}

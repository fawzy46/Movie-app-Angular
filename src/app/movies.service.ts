import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  getPopularMovies() {
    const moviesurl = '${this.url}top_rated?api_key=${this.apiKey}';

    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=4d6ab8e4d6677010c58ac20258d16ca5').pipe(
      map((res: any) => Object.values(res))
    )
  }
  private url = 'https://api.themoviedb.org/3/movie/';
  private apiKey = '4d6ab8e4d6677010c58ac20258d16ca5';

  constructor(private http: HttpClient) { 
  }
  getTopMovies()
  {
    const moviesurl = '${this.url}top_rated?api_key=${this.apiKey}';

    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=4d6ab8e4d6677010c58ac20258d16ca5').pipe(
      map((res: any) => Object.values(res))
    )
  }
  getMovieDetail(id: number)
  {
    return this.http.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=4d6ab8e4d6677010c58ac20258d16ca5').pipe(
      map((res: any) => Object.values(res))
    )
  }
}


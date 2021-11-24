import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "../models/movie.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiURL = 'https://ngrx-crud-46ae6-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) {
  }

  getMovies(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(`${ this.apiURL }/movies.json`)
      .pipe(
        map((data: any) => {
          const movies: Movie[] = [];

          for (let key in data) {
            movies.push({...data[key], id: key})
          }

          return movies;
        })
      )
  }

  addMovie(movie: Movie): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(`${ this.apiURL }/movies.json`, movie)
  }

  editMovie(movie: Movie) {
    const data = {
      // @ts-ignore
      [movie.id]: {title: movie.title, description: movie.description}
    };

    return this.http.patch(`${ this.apiURL }/movies.json`, data);
  }

  deleteMovie(movieId: string) {
    return this.http.delete(`${ this.apiURL }/movies/${ movieId }.json`);
  }
}

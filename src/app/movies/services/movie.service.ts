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
}

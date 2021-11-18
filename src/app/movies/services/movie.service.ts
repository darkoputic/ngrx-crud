import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiURL = 'https://imdb8.p.rapidapi.com/actors/get-all-news';

  constructor(private http: HttpClient) {
  }

  getPopularCelebs(): Observable<any> {
    const params = new HttpParams()
      .append('nconst', 'nm0001667');

    return this.http.get(this.apiURL, {params});
  }
}

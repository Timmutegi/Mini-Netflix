import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string;

  constructor(private http: HttpClient) {}

  getHomeMovies() {
    return this.http.get<any>('http://www.omdbapi.com/?s=avengers&apikey=71653937');
  }

  getMovies() {
     return this.http.get<any>('http://www.omdbapi.com/?s=x-men&apikey=71653937');
  }

  getSpecificMovie(imdbID: string) {
    return this.http.get<any>(`http://www.omdbapi.com/?i=${imdbID}&apiKey=71653937`);
  }

  getSeries() {
    this.apiURL = 'http://www.omdbapi.com/?i=tt3514324&apikey=71653937';
    return this.http.get<any>(this.apiURL);
  }

  search(title: string) {
    return this.http.get<any>(`http://www.omdbapi.com/?t=${title}&apikey=71653937`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://www.omdbapi.com/?s=batman&apikey=71653937';

  apiURL: string;

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<any>(this.apiUrl);
  }

  getSpecificMovie(imdbID) {
    this.apiURL = `http://www.omdbapi.com/?i=${imdbID}&apiKey=71653937`;
    return this.http.get<any>(this.apiURL);
  }
}

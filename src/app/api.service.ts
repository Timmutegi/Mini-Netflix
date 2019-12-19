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

  getSpecificMovie(imdbID: string) {
    return this.http.get<any>(`http://www.omdbapi.com/?i=${imdbID}&apiKey=71653937`);
  }

  getSeries() {
    this.apiURL = 'http://www.omdbapi.com/?i=tt3514324&apikey=71653937';
    return this.http.get<any>(this.apiURL);
  }

  search(title: string) {
    this.apiUrl = `http://www.omdbapi.com/?t=${title}&apikey=71653937`;
    return this.http.get<any>(this.apiUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://www.omdbapi.com/?s=batman&apikey=71653937';

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<any>(this.apiUrl);
  }
}

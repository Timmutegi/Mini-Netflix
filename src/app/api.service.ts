import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: String = ''

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get()
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: any;

  constructor(private data: ApiService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie() {
    this.data.getMovies()
    .subscribe(
      res => {
        // console.log(res);
        this.movies = res.Search;
        console.log(this.movies);
      },
      err => {
        console.log(err);
      }
    );
  }

  onClick(ID: any) {
    // console.log(ID);
    const url = `movies/details/${ID}`;
    this.router.navigate([url]);
  }

  logout() {
    this.authService.logout();
  }
}

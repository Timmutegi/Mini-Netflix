import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: any;
  imdbID: string;

  constructor(private data: ApiService, private router: Router) { }

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

  onClick(ID: string) {
    this.imdbID = ID;
    console.log(this.imdbID);
    localStorage.setItem('ID', this.imdbID);
    this.router.navigate(['/movie-details']);
  }
}

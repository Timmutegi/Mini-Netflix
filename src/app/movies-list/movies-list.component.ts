import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: any;

  constructor(private data: ApiService) { }

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
      }
    );
  }

}

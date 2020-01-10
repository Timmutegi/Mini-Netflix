import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: any;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.getMovie();
  }

  getMovie() {
      this.apiService.getHomeMovies().subscribe(
      res => {
        console.log(res);
        this.movies = res.Search;
        // console.log(this.movies);
      },
      err => {
        console.log(err);
      }
    );
  }

  onClick(ID: string) {
   const url = `movies/details/${ID}`;
   this.router.navigate([url]);
  }
}

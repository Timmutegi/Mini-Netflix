import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  ID: string;
  movie: any;

  constructor(private data: ApiService) { }

  ngOnInit() {
    this.ID = localStorage.getItem('ID');
    console.log(this.ID);
    this.displayMovie();
  }

  displayMovie() {
    this.data.getSpecificMovie(this.ID)
    .subscribe(
      res => {
        console.log(res);
        this.movie = res;
        // console.log(this.movie);
      }
    );
  }

}

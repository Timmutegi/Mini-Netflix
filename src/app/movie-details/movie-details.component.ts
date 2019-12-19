import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FirebaseService } from '../firebase.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  liked: [];
  like = false;
  movieID: any;

  constructor(
    private data: ApiService,
    private firebaseService: FirebaseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.movieID = params.ID;
      });
    console.log(this.movieID);
    this.displayMovie();
  }

  likeMovie(ID: any, name: string) {
    this.like = !this.like;
    this.firebaseService.createFavoriteMovie(ID, name).then(res => {
      console.log(res);
    });
  }

  dislikeMovie(ID: any) {
    this.like = !this.like;
    this.firebaseService.delete(ID).then(res => {
      console.log(res);
    });
  }

  displayMovie() {
    // console.log(this.movieID);
    this.data.getSpecificMovie(this.movieID).subscribe(res => {
      // console.log(res);
      this.movie = res;
      this.firebaseService.getFavoriteMovieID(this.movieID)
      .subscribe(response => {
          console.log(res);
          if (response._document != null) {
          this.like = true;
        }
        }, err => {
          this.like = false;
        }
      );
    });
  }
}

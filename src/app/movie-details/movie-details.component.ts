import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FirebaseService } from '../firebase.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';


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
  favorites: object[];

  constructor(
    private data: ApiService,
    private firebaseService: FirebaseService,
    private route: ActivatedRoute,
    private db: AngularFirestore
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.movieID = params.ID;
      });
    console.log(this.movieID);
    this.displayMovie();
  }

  likeMovie(imdbID: any, name: string) {
    this.like = !this.like;
    const uid = localStorage.getItem('uid');
    console.log(uid);
    this.firebaseService.createFavoriteMovie(imdbID, name, uid );
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
      const uid = localStorage.getItem('uid');
      // const ID = this.firebaseService.getFavoriteMovieID(this.movieID);

      this.db.collection('favorites').get().subscribe(
        response => {
          response.forEach(doc => {
            // this.favorites.push(doc.data().uid);
            if (this.movieID === doc.id) {
              if (uid === doc.data().uid) {
                this.like = true;
              } else {
                this.like = false;
              }
              this.like = true;
            } else {
              this.like = false;
            }

          });
        }
      );
    });
  }
}

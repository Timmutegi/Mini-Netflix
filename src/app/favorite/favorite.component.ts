import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  // liked: any;
  liked: string[] = [];
  movies: object[] = [];
  favorites: object[] = [];
  favoriteMovies: boolean;

  constructor(
    private firebaseService: FirebaseService,
    private apiService: ApiService,
    private router: Router,
    private db: AngularFirestore
  ) {}

  ngOnInit() {
    this.getFavorites();
  }

  getFavorites() {
    let userUID: string;
    userUID = localStorage.getItem('uid');
    this.db.collection('favorites').get().subscribe(
      res => {
        res.forEach(doc => {
          if (doc.data().uid === userUID) {
            this.liked.push(doc.id);
          }
        });
        this.displayFavorites();
      }
    );
  }

  displayFavorites() {
    console.log(this.liked.length === 0);
    if (this.liked.length === 0) {
      this.favoriteMovies = false;
    } else {
      this.favoriteMovies = true;
    }
    this.liked.forEach(likedMovie => {
      this.apiService.getSpecificMovie(likedMovie).subscribe(res => {
        this.movies.push(res);
      });
    });
  }

  onClick(ID: string) {
    const url = `favorites/details/${ID}`;
    this.router.navigate([url]);
  }
}

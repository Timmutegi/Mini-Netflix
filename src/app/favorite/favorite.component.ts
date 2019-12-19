import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  // liked: any;
  liked: string[] = [];
  movies: object[] = [];

  constructor(
    private firebaseService: FirebaseService,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getFavorites();
  }

  getFavorites() {
    return this.firebaseService.getLiked().subscribe(res => {
      // console.log(res);

      // this.liked = res;
      res.forEach(liked => {
        // const id  = movie.payload.doc.id;
        // console.log(liked);
        this.liked.push(liked.payload.doc.id);
      });
      // console.log(this.liked);
      this.displayFavorites();
    });
  }

  displayFavorites() {
    console.log(this.liked.length);
    this.liked.forEach(likedmovie => {
      console.log(1);
      this.apiService.getSpecificMovie(likedmovie).subscribe(res => {
        this.movies.push(res);
        console.log(this.movies);
      });
    });
  }

  onClick(ID: string) {
    const url = `movies/details/${ID}`;
    this.router.navigate([url]);
  }
}

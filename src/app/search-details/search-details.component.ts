import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.scss']
})
export class SearchDetailsComponent implements OnInit {
  movie: any;

  constructor(private data: ApiService, private router: Router) {}

  ngOnInit() {
    this.displayMovie();
  }

  displayMovie() {
    this.data.getSpecificMovie(localStorage.getItem('searchID')).subscribe(res => {
      // console.log(res);
      this.movie = res;
      // console.log(this.movie);
    });
  }

  back() {
    localStorage.removeItem('searchID');
    localStorage.clear();
    this.router.navigateByUrl('/home');

  }
}

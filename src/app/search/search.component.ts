import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  movies: any;

  constructor(private apiService: ApiService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: ''
    });
  }

  onSubmit(input: string) {
    // console.log(input);
    this.apiService.search(input).subscribe(res => {
      console.log(res);
      this.movies = res;
      console.log(this.movies);
    });
  }

  onClick(ID: string) {
    localStorage.setItem('searchID', ID);
    this.router.navigate(['search/search-details']);
  }
}

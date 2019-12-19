import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  series: any;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.getSeries();
  }

  getSeries() {
    this.apiService.getSeries().subscribe(
      res => {
        // console.log(res);
        this.series = res;
        // console.log(this.series);
      },
      err => {
        console.log(err);
      }
    );
  }

  onClick(ID: string) {
     const url = `series/details/${ID}`;
     this.router.navigate([url]);
  }
}

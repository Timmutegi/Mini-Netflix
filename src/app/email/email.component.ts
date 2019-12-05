import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  errorMessage: string;
  successMessage: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(email: string, password: string) {
    this.authService.login(email, password)
    .then(res => {
      console.log(res);
      this.errorMessage = 'None';
      this.successMessage = 'Your account has been created';
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = '';
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted: boolean;
  email: string;
  password: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {
     this.signupForm = this.formBuilder.group({
      //  firstname: ['', Validators.required],
      //  lastname: [''],
      //  phonenumber: [''],
       email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$')]],
       password: ['', [Validators.required, Validators.min(6)]]
     });
  }

  get f() {
    return this.signupForm.controls;
  }

  signUp() {
    this.submitted = true;

    if (this.signupForm.invalid) {
      return;
    }

    this.email = this.signupForm.get('email').value;
    this.password = this.signupForm.get('password').value;

    this.authService.signUp(this.email, this.password);
  }

}

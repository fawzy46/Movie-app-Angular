import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';
import { ConfirmPasswordValidatorDirective } from './shared/confirm-password-validator.directive';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})


export class SignUpFormComponent implements OnInit {

  constructor(private router: Router, private SignupService: SignupService, private http: HttpClient) { }

  isValidSignup = true;
  url = 'http://localhost:8080/signup';

  ngOnInit(): void {
  }
  onSubmit(form: NgForm)
  {
    /*this.SignupService.AddUser(form);
    this.isValidSignup = this.SignupService.isValidSignup;
    console.log("signup-form + " + this.SignupService.isValidSignup);*/
    const PostData = {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password
    }

    this.http.post(this.url,PostData).subscribe(responseData => {
      this.isValidSignup = !!responseData;
      if(this.isValidSignup) {
        this.router.navigate(['/']);
      }
    });
  }

}

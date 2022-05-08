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

  constructor(private router: Router, private SignupService: SignupService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm)
  {
    this.SignupService.AddUser(form);
  }

}

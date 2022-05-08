import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmPasswordValidatorDirective } from './shared/confirm-password-validator.directive';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})


export class SignUpFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm)
  {
    
  }

}

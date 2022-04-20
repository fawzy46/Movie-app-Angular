import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private router: Router, private authservice: AuthService) { }
  Token!: string;
  ngOnInit(): void {
    this.authservice.KeepMeLoggedIn();
    if(this.authservice.isLogedin)
    {
      this.router.navigate(['/catalog']);
    }
  }
  onSubmit(form: NgForm)
  {
    this.authservice.Login(form);
  }

}

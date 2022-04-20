import { Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  
  isLogedin: boolean = false;
  Token!: String;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  
  KeepMeLoggedIn()
  {
    this.Token = String(localStorage.getItem('token'));
    if(this.Token === "true")
    {
      this.isLogedin = true;
    }
    else
    {
      this.isLogedin = false;
    }
  }
  isAuthentecated() {
    this.KeepMeLoggedIn();
    const promise = new Promise(
      (resolve) => {  
          resolve(this.isLogedin);
      }
    );
    return promise;
  }
  Login(form: NgForm)
  {
    if(form.value.email === 'fawzy.fawzy46@gmail.com' && form.value.password === 'abc')
    {
      form.reset();
      this.router.navigate(['catalog']);
      this.isLogedin = true;
      localStorage.setItem('token',String(this.isLogedin));
    }
    else
    {
      alert("Invalid Credentials!")
    }
  }
  Logout()
  {
    this.isLogedin = false;
    localStorage.setItem('token', String(this.isLogedin));
    return false;
  }

}

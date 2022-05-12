import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Response } from './Response';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  
  isLogedin: boolean = false;
  Token!: String;
  constructor(private router: Router, private http: HttpClient) { }

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
    const PostData = {
      email: form.value.email,
      password: form.value.password
    }

    const AuthRequest =  this.http.post<Response>('http://localhost:8080/auth', PostData).subscribe(res => {
      console.log(res.status);
      if(res.status) {
        form.reset();
        this.router.navigate(['catalog']);
        this.isLogedin = true;
        localStorage.setItem('token',String(this.isLogedin));
      }
      else {
        alert(res.message);
      }
    });
  }

  Logout()
  {
    this.isLogedin = false;
    localStorage.setItem('token', String(this.isLogedin));
    return false;
  }

}

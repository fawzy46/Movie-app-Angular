import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  
  isLogedin: boolean = false;
  constructor(private router: Router) { }

  isAuthentecated() {
    const promise = new Promise(
      (resolve, reject) => {  
          resolve(this.isLogedin);
      }
    );
    return promise;
  }
  Login(form: NgForm)
  {
    if(form.value.email === 'fawzy.fawzy46@gmail.com' && form.value.password === 'abc')
    {
      console.log('gg');
      form.reset();
      this.router.navigate(['catalog']);
      this.isLogedin = true;
    }
    else
    {
      alert("Invalid Credentials!")
    }
  }
  Logout()
  {
    this.isLogedin = false;
    return false;
  }

}

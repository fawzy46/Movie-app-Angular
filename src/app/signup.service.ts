import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url = 'http://localhost:8080/signup';
  isValidSignup = true;
  AddUser(form: NgForm) {
    const PostData = {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password
    }

    this.http.post(this.url,PostData).subscribe(responseData => {
      this.isValidSignup = !!responseData;
      console.log(this.isValidSignup);
    });
  }

  constructor(private http: HttpClient) { 
  }
}

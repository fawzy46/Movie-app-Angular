import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url = 'http://localhost:8080/signup';
  AddUser(form: NgForm) {
    const PostData = {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password
    }
    console.log(PostData);
    this.http.post(this.url,PostData).subscribe(responseData => {
      console.log(responseData);
    });
  }

  constructor(private http: HttpClient) { 
  }
}

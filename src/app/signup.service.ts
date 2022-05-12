import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url = 'http://localhost:8080/signup';
  AddUser(PostData: any) {

    return this.http.post(this.url,PostData)
  }

  constructor(private http: HttpClient) { 
  }
}

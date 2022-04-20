import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})

export class HeaderComponent implements OnInit {

  isLogedin: boolean = false;
  constructor(public authservice: AuthService, private router: Router) { }

  ngOnInit(): void {

  }
  Logout() {
    this.authservice.Logout();
    this.router.navigate(['']);
  }

}

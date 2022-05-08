import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  movies: any = [];
  sortedbyTop = true;
  constructor(private moviesService: MoviesService, private router: Router, private route: ActivatedRoute,private authservice: AuthService) { }

  ngOnInit(): void {
    this.getMovies();
    //this.test();
  }

  getMovies() {
    this.movies = [];
    this.moviesService.getTopMovies().subscribe((reseults: any) => {
      for(const i in reseults[1])
      {
        this.movies.push(reseults[1][i]);
      }
      
    })
  }
  getPopularMovies() {
    this.movies = [];
    this.sortedbyTop = false;
    this.moviesService.getPopularMovies().subscribe((reseults: any) => {
      for(const i in reseults[1])
      {
        this.movies.push(reseults[1][i]);
      }
    })
  }

  /*test() {
    this.moviesService.test().subscribe((res: any) => {
      console.log(res);
    })
  }*/

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  selectedMovie: any;
  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.selectedMovie = [];
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (id) this.getDetailes(id)
    })
  }
  getDetailes(id: number) {
    this.moviesService.getMovieDetail(id)
      .subscribe(
        response => {this.selectedMovie = response
          this.selectedMovie[23] *= 10;
          console.log(this.selectedMovie);
        });
      }
}

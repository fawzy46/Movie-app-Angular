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
  MovieLang!: string;
  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.selectedMovie = [];
    this.MovieLang = '';
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
          this.selectedMovie[12] = "https://image.tmdb.org/t/p/w500" + this.selectedMovie[12];
          this.MovieLang = this.selectedMovie[18][0].english_name;
        });
      }
}

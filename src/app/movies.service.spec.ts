import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { MoviesService } from './movies.service';
import { HttpClient } from '@angular/common/http';


describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../auth.service';
import { MoviesService } from '../movies.service';
import { CatalogComponent } from './catalog.component';

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;
  let db: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogComponent],
      imports: [HttpClientModule,RouterTestingModule],
      providers: [MoviesService,AuthService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    db = fixture.debugElement;
    fixture.detectChanges;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have cards', () => {
    let fixture = TestBed.createComponent(CatalogComponent);
    let db = fixture.debugElement;
    let catalog = db.injector.get(CatalogComponent);
    fixture.detectChanges();
    expect(catalog.sortedbyTop).toBe(true);
  });
  it('should have Popular button at the start', () => {
    let fixture = TestBed.createComponent(CatalogComponent);
    let db = fixture.debugElement;
    fixture.detectChanges();
    //let compiled = fixture.debugElement.nativeElement;
    expect(db.query(By.css('#pb')).nativeElement).toBeTruthy();
  });

  it('should have top rated button when clicked', () => {
    let fixture = TestBed.createComponent(CatalogComponent);
    let db = fixture.debugElement;
    let catalog = db.injector.get(CatalogComponent);
    catalog.sortedbyTop = false;
    fixture.detectChanges();
    expect(db.query(By.css('#trb')).nativeElement).toBeTruthy();
  });

  it('should have 20 Movie', waitForAsync(() => {
    let fixture = TestBed.createComponent(CatalogComponent);
    let db = fixture.debugElement;
    let catalog = db.injector.get(CatalogComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(catalog.movies.length).toEqual(20);
    })
  }));

  /*it('should render cards', () => {
    let fixture = TestBed.createComponent(CatalogComponent);
    let db = fixture.debugElement;
    let catalog = db.injector.get(CatalogComponent);
    let app = fixture.debugElement.componentInstance;
    catalog.movies = [
      {
        "adult": false,
        "backdrop_path": "/wPU78OPN4BYEgWYdXyg0phMee64.jpg",
        "genre_ids": [18, 80],
        "id": 278,
        "original_language": "en",
        "original_title": "The Shawshank Redemption",
        "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
        "popularity": 70.845,
        "poster_path": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "release_date": "1994-09-23",
        "title": "The Shawshank Redemption",
        "video": false,
        "vote_average": 8.7,
        "vote_count": 21166
      }];
    //catalog.getMovies();
    console.log(catalog.movies.length);
    fixture.detectChanges();
    expect(db.query(By.css('.card')).nativeElement).toBeTruthy();
  });*/

});

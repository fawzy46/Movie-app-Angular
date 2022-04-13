import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../auth.service';
import { LoginformComponent } from './loginform.component';

describe('LoginformComponent', () => {
  let component: LoginformComponent;
  let fixture: ComponentFixture<LoginformComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,FormsModule],
      declarations: [ LoginformComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

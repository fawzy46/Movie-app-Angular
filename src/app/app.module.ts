import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginformComponent } from './loginform/loginform.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AuthGuardService } from './auth-guard.service';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ConfirmPasswordValidatorDirective } from './sign-up-form/shared/confirm-password-validator.directive';
import { AuthGuardInverseService } from './auth-guard-inverse.service';

const appRoutes: Routes =[
  {path: '', component: LoginformComponent} , 
  {path: 'catalog',canActivate: [AuthGuardService] , component: CatalogComponent} ,
  {path: 'catalog/:id',canActivate: [AuthGuardService], component: MovieDetailComponent} ,
  {path: 'signup',canActivate: [AuthGuardInverseService], component: SignUpFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginformComponent,
    CatalogComponent,
    MovieDetailComponent,
    SignUpFormComponent,
    ConfirmPasswordValidatorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

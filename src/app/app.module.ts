import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SeriesComponent } from './series/series.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { HeaderComponent } from './header/header.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchDetailsComponent } from './search-details/search-details.component';
import { NavbarComponent } from './navbar/navbar.component';



export const config = {
  apiKey: 'AIzaSyAb6_P1aEuxcp4O0ChwLh18xQuJOLYmWcc',
  authDomain: 'truflix-57712.firebaseapp.com',
  databaseURL: 'https://truflix-57712.firebaseio.com',
  projectId: 'truflix-57712',
  storageBucket: 'truflix-57712.appspot.com',
  messagingSenderId: '770283727976',
  appId: '1:770283727976:web:fa0a0bbca8713ab0681fdd',
  measurementId: 'G-QQ5DDQ61TB'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    SeriesComponent,
    SignupComponent,
    EmailComponent,
    HeaderComponent,
    FavoriteComponent,
    LoginComponent,
    SearchComponent,
    SearchDetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

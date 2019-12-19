import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchDetailsComponent } from './search-details/search-details.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { FavoriteComponent } from './favorite/favorite.component';


const routes: Routes = [
  { path: 'movies', component: MoviesListComponent },
  { path: 'search', component: SearchComponent },
  { path: 'home', component: HomeComponent },
  { path: 'series', component: SeriesComponent },
  { path: ':type/details/:ID', component: MovieDetailsComponent },
  { path: 'search-details', component: SearchDetailsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: EmailComponent },
  { path: 'favorite', component: FavoriteComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

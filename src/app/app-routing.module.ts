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
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: 'movies', component: MoviesListComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'series', component: SeriesComponent, canActivate: [AuthGuard] },
  { path: ':type/details/:ID', component: MovieDetailsComponent, canActivate: [AuthGuard] },
  { path: 'search-details', component: SearchDetailsComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: EmailComponent },
  { path: 'favorite', component: FavoriteComponent, canActivate: [AuthGuard] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

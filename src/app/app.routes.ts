import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { MovieFormPageComponent } from './pages/movie-form-page/movie-form-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:movieName', component: MovieDetailComponent },
  { path: 'create', component: MovieFormPageComponent },
];

import { Routes } from '@angular/router';
import { ShowMovieComponent } from './pages/show-movie/show-movie.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'show-movie/:movieId',
    component: ShowMovieComponent,
  },
];

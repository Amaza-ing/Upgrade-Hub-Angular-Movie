import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import Movie from '../../models/Movie';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
})
export class MovieDetailComponent {
  selectedMovie?: Movie;

  constructor(
    private route: ActivatedRoute,
    public movieService: MovieService
  ) {
    const movieName = route.snapshot.params['movieName'];
    this.selectedMovie = movieService.getMovie(movieName);
  }
}

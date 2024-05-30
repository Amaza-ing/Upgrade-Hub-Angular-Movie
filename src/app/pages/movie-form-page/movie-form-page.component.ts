import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieFormComponent } from '../../components/movie-form/movie-form.component';

@Component({
  selector: 'app-movie-form-page',
  standalone: true,
  imports: [HeaderComponent, MovieFormComponent],
  templateUrl: './movie-form-page.component.html',
  styleUrl: './movie-form-page.component.css'
})
export class MovieFormPageComponent {

}

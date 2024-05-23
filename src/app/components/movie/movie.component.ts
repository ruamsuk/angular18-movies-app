import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Movie } from '../../models/movie';
import { imagesBaseUrl } from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [DatePipe, RouterModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  public imagesBaseUrl = imagesBaseUrl;
  @Input() movie!: Movie;
}

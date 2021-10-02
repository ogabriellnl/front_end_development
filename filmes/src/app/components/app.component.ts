import { Component } from '@angular/core';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'filmes';

  constructor(
    private oFilmesService: FilmesService
  ) { }
}

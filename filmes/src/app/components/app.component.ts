import { Component, OnInit } from '@angular/core';
import { IFilmes } from '../models/filmes';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'filmes';

  aDadosFilmes: Array<IFilmes>;

  constructor(private oFilmesService: FilmesService) { }

  ngOnInit() {
    this.oFilmesService.listarFilmes().subscribe((aFilmes: Array<IFilmes>) => {
      this.aDadosFilmes = aFilmes;
      console.log(this.aDadosFilmes);
    });
  }

  getClassItem(index: number): string {
    return `${'item' + index}`;
  }

  getWidth(index: number) {
    switch (index) {
      case 1:
        return 300;
        break;
      case 2:
        return 300;
        break;
      case 3:
        return 300;
        break;
    }
  }

  getHeigth(index: number) {
    switch (index) {
      case 1:
        return 300;
        break;
      case 2:
        return 300;
        break;
      case 3:
        return 300;
        break;
    }
  }
}

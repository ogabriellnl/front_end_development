import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subscriber } from 'rxjs/internal/Subscriber';
import { IFilmes } from '../models/filmes';

@Injectable()
export class FilmesService {

  constructor(private oHttpClient: HttpClient) { }

  public listarFilmes() {
    return new Observable<any>((oObserver: Subscriber<any>) => {
      this.oHttpClient.get('./assets/Filmes.JSON').subscribe((aData: Array<IFilmes>) => {
        oObserver.next(aData);
      });
    });
  }
}

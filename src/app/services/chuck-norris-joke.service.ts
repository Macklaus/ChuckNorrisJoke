import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import 'rxjs/add/operator/pluck';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChuckNorrisJokeService {

  url = 'https://api.chucknorris.io/jokes/random';

  constructor(private _httpClient: HttpClient) { }

  getJokes(intervalTime: number): Observable<{}> {
    return Observable.interval(intervalTime).flatMap(() => {
      return this._httpClient.get(this.url).pluck('value');
    });
  }

}

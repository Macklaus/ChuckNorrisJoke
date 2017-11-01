import { ChuckNorrisJokeService } from './../services/chuck-norris-joke.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chuck-norris-joke',
  templateUrl: './chuck-norris-joke.component.html',
  styleUrls: ['./chuck-norris-joke.component.css']
})
export class ChuckNorrisJokeComponent implements OnInit {

  chuckNorrisJokes$;
  secondsToGetJokes = 6;

  constructor(private _chuckNorrisJokeService: ChuckNorrisJokeService) { }

  getChuckNorrisJokes() {
    this.chuckNorrisJokes$ = this._chuckNorrisJokeService.getJokes(this.secondsToGetJokes * 1000);
  }

  ngOnInit() {
    this.getChuckNorrisJokes();
  }

}

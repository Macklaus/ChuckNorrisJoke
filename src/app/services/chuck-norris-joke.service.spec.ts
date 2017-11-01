import { TestBed, inject } from '@angular/core/testing';

import { ChuckNorrisJokeService } from './chuck-norris-joke.service';

describe('ChuckNorrisJokeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChuckNorrisJokeService]
    });
  });

  it('should be created', inject([ChuckNorrisJokeService], (service: ChuckNorrisJokeService) => {
    expect(service).toBeTruthy();
  }));
});

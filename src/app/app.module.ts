import { ChuckNorrisJokeService } from './services/chuck-norris-joke.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ChuckNorrisJokeComponent } from './chuck-norris-joke/chuck-norris-joke.component';

@NgModule({
  declarations: [
    AppComponent,
    ChuckNorrisJokeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ChuckNorrisJokeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

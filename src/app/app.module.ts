import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GamecardComponent } from './gamecard/gamecard.component';
import { UseravatarComponent } from './useravatar/useravatar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamecardComponent,
    UseravatarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

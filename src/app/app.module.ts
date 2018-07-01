import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GamecardComponent } from './gamecard/gamecard.component';
import { UseravatarComponent } from './useravatar/useravatar.component';
import { GamedetailComponent } from './gamedetail/gamedetail.component';
import { FilterbarComponent } from './filterbar/filterbar.component';
import {WINDOW_PROVIDERS} from './window.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamecardComponent,
    UseravatarComponent,
    GamedetailComponent,
    FilterbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }

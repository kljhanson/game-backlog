import {ChangeDetectorRef, Component, HostListener, Inject, Input} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {WINDOW} from './window.service';

@Component({
  selector: 'gb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @Input() activeGame: string;
  blur = false;
  @Input() fixToolbar = false;

  gameData = {
    games: [
      {
        appId: 72850,
        name: "The Elder Scrolls V: Skyrim",
      },
      {
        appId: 620,
        name: "Portal 2"
      },
      {
        appId: 1,
        name: "DARK SOULS"
      },
      {
        appId: 570,
        name: "Dota 2"
      },
      {
        appId: 730,
        name: "Counter-Strike: Global Offensive"
      },
      {
        appId: 8930,
        name: "Sid Meir's Civilization V"
      },
      {
        appId: 28050,
        name: "Deus Ex: Human Revolution"
      },
      {
        appId: 230230,
        name: "Divinity: Original Sin"
      },
      {
        appId: 252950,
        name: "Rocket League"
      },
      {
        appId: 292030,
        name: "The Witcher 3: Wild Hunt"
      },
      {
        appId: 367520,
        name: "Hollow Knight"
      },
      {
        appId: 374320,
        name: "Dark Souls III"
      },
      {
        appId: 377160,
        name: "Fallout 4"
      },
      {
        appId: 387290,
        name: "Ori and the Blind Forest"
      },
      {
        appId: 435150,
        name: "Divinity: Original Sin 2"
      },
      {
        appId: 524220,
        name: "NieR: Automata"
      },
    ]
  };

  constructor(
    // private ref: ChangeDetectorRef,
              @Inject(DOCUMENT) private document: Document,
              @Inject(WINDOW) private window: Window) {
    const sourceArray = this.gameData.games;
    for (let i = 0; i < sourceArray.length - 1; i++) {
      const j = i + Math.floor(Math.random() * (sourceArray.length - i));
      const temp = sourceArray[j];
      sourceArray[j] = sourceArray[i];
      sourceArray[i] = temp;
    }
    this.gameData.games = sourceArray;
    // this.ref.markForCheck();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event): void {
    const number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    this.fixToolbar = (number >= 98);
  }

  openModel(game: string): void {
    console.log(game);
    this.activeGame = game;
    this.blur = true;
  }

  dismissModal(): void {
    this.activeGame = null;
    this.blur = false;
    console.log("callback" + this.activeGame);
    // this.ref.markForCheck();
  }
}

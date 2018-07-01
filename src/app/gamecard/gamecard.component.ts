import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'gb-gamecard',
  templateUrl: './gamecard.component.html',
  styleUrls: ['./gamecard.component.css']
})
export class GamecardComponent implements OnInit {

  @Input()
  appId: number;

  @Input()
  gameTitle: string;

  @Output()
  onClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  gameWasClicked(): void {
    console.log('clicked game' + this.gameTitle);
    this.onClick.emit(this.gameTitle);
  }

}

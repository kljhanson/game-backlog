import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gb-gamecard',
  templateUrl: './gamecard.component.html',
  styleUrls: ['./gamecard.component.css']
})
export class GamecardComponent implements OnInit {

  @Input()
  gameTitle: string;

  @Input()
  gameIcon: string;

  constructor() { }

  ngOnInit() {
  }

}

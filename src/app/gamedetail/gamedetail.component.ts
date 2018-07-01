import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gb-gamedetail',
  templateUrl: './gamedetail.component.html',
  styleUrls: ['./gamedetail.component.css']
})
export class GamedetailComponent implements OnInit {

  @Input() game: string;

  constructor() {
  }

  ngOnInit() {
  }

  shouldShow(): boolean {
    return (this.game != null && this.game.length > 0);
  }

  dismiss(): void {
    this.game =  null;
  }

}

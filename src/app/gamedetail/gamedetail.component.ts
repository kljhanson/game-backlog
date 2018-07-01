import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'gb-gamedetail',
  templateUrl: './gamedetail.component.html',
  styleUrls: ['./gamedetail.component.css']
})
export class GamedetailComponent implements OnInit {

  @Input() game: string;
  @Input() callback: Function;

  @Output()
  dismissEvent: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  shouldShow(): boolean {
    return (this.game != null && this.game.length > 0);
  }

  dismiss(): void {
    // this.game =  null;
    this.dismissEvent.emit();
  }

}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gb-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.css']
})
export class FilterbarComponent implements OnInit {

  @Input() fixed = false;

  constructor() { }

  ngOnInit() {
  }

}

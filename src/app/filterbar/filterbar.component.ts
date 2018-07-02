import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {text} from '@angular/core/src/render3/instructions';

@Component({
  selector: 'gb-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.css']
})
export class FilterbarComponent implements OnInit {

  filters = {
    search: null,
    category: null,
    status: null,
    date: null
  };

  @Input() fixed = false;

  @Output() onFilter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clearSearch() {
    this.filters.search = null;
    this.onFilter.emit(this.filters);
  }

  onChange(textbox) {
    var value = textbox.value;
    if(value != null && value.trim().length === 0) {
      value = null;
    }
    this.filters.search = value;
    this.onFilter.emit(this.filters);
  }

}

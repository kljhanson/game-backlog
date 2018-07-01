import {Component, HostListener, Inject, Input, OnInit} from '@angular/core';
import {WINDOW} from '../window.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'gb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() opacity = 1;
  @Input() scale = 1;
  @Input() margin = 0;

  constructor(@Inject(DOCUMENT) private document: Document,
              @Inject(WINDOW) private window: Window) {

  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event): void {
    const number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    console.log(number);
    var newOpacity = 0;
    var newScale = 0.75;
    var newMargin = 20;
    if(number <= 100) {
      newOpacity = 1 - (number / 100);
      newScale = 1 - ((number / 4) / 100);
      newMargin = 20 * (number / 100);
    }
    this.opacity = newOpacity;
    this.scale = newScale;
    this.margin = newMargin;
  }

  ngOnInit() {
  }

}

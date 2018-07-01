import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gb-useravatar',
  templateUrl: './useravatar.component.html',
  styleUrls: ['./useravatar.component.css']
})
export class UseravatarComponent implements OnInit {

  @Input()
  username: string;

  @Input()
  initials: string;

  @Input()
  avatarIcon: string;

  @Input()
  badgeNum: string;

  constructor() { }

  ngOnInit() {
  }

}

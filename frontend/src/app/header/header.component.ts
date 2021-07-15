import { Component, OnInit } from '@angular/core';

import { ELEMENTS } from './elements';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ELEMENTS = ELEMENTS;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-element',
  templateUrl: './header-element.component.html',
  styleUrls: ['./header-element.component.scss']
})
export class HeaderElementComponent implements OnInit {

  /**
   * La URL del elemento de menú
   */
  @Input() elementUrl: String = '';

  /**
   * El Icono del elemento de menú
   */
  @Input() elementIcon!: IconDefinition;

  /**
   * El nombre del elemento de menú
   */
  @Input() elementName: String = '';

  constructor() { }

  ngOnInit(): void {
  }

}

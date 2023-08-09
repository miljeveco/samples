import { Component } from '@angular/core';
import {Heroe, HEROES} from '../heroe'

@Component({
  selector: 'heroe',
  templateUrl: './heroe-component.component.html',
  styleUrls: ['./heroe-component.component.css']
})
export class HeroeComponentComponent {
  myHeroe1:Heroe = HEROES[0];

  myHeroe2:Heroe = HEROES[1];

  myHeroe3:Heroe = HEROES[2];
}

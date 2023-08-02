import { Component } from '@angular/core';
import {Heroe} from '../heroe'

@Component({
  selector: 'heroe',
  templateUrl: './heroe-component.component.html',
  styleUrls: ['./heroe-component.component.css']
})
export class HeroeComponentComponent {
  myHeroe1:Heroe ={
    id : 1,
    name : 'Superman'
  };

  myHeroe2:Heroe ={
    id : 1,
    name : 'Batman'
  };

  myHeroe3:Heroe ={
    id : 1,
    name : 'Supergirl'
  };

  mysHeroes:Heroe[] = [];

  constructor(){
    this.mysHeroes.push(this.myHeroe1);
    this.mysHeroes.push(this.myHeroe2);
    this.mysHeroes.push(this.myHeroe3);
  }
}

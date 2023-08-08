import { Component } from '@angular/core';
import {Heroe, HEROES} from '../heroe'

@Component({
  selector: 'newheroe',
  templateUrl: './newheroe.component.html',
  styleUrls: ['./newheroe.component.css']
})
export class NewheroeComponent {
  mysHeroes:Heroe[] = HEROES;

  newHeroe(){
    let newid:number = this.mysHeroes.length + 1;
    console.log("entró al método desde click");
    this.mysHeroes.push({
       id:newid,
       name:'Heroe ' + newid,
       description:'nuevo heroe ...'
      });
  }
}

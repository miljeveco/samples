import { Component } from '@angular/core';
import {Heroe, HEROES} from '../heroe'

@Component({
  selector: 'newheroe',
  templateUrl: './newheroe.component.html',
  styleUrls: ['./newheroe.component.css']
})
export class NewheroeComponent {
  mysHeroes:Heroe[] = HEROES;
  myNewHeroe:Heroe = {id:-1,name:"New Heroe", description:"None..."};

  newHeroe(nameHeroe:string){
    let newid:number = this.mysHeroes.length + 1;
    console.log("entró al método desde click");
    this.mysHeroes.push({
       id:newid,
       name:nameHeroe,
       description:'nuevo heroe ...'
      });
  }

  newHeroe2(){
    this.myNewHeroe.id = this.mysHeroes.length + 1;
    this.mysHeroes.push(this.myNewHeroe);
    console.log("Agregó...");
    this.myNewHeroe = {id:-1,name:"New Heroe", description:"None..."};
  }
}

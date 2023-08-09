import { Component } from '@angular/core';
import {Heroe, HEROES} from '../heroe'

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  mysHeroes:Heroe[] = HEROES;
  selectedHeroe:Heroe|null=null;

  selectHeroe(heroe:Heroe){
    this.selectedHeroe = heroe;
  }

  updadetHeroe(myHeroe:Heroe, newNameHeroe:string){
    myHeroe.name = newNameHeroe;
  }

}

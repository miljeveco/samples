import { Component } from '@angular/core';
import {Heroe} from '../heroe'

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  

  mysHeroes:Heroe[] =[
    {
    id : 1,
    name : 'Superman'
    },
    {
    id : 1,
    name : 'Batman'
    },
    {
    id : 1,
    name : 'Supergirl'
    }
  ]
}

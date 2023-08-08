import { Component } from '@angular/core';
import {Heroe} from '../heroe'

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  mysHeroes:Heroe[] =[
    {
    id : 1,
    name : 'Superman',
    description: "Clark Ken oculta sus poderes en un tímido e introvertido periodista..."
    },
    {
    id : 2,
    name : 'Batman',
    description: "Bruce Wills el  multimillonario oculta su temor a los murcipeplagos en un disfraz..."
    },
    {
    id : 3,
    name : 'Supergirl',
    description: 'Las mujeres tienen a su super man femenino...'
    }
  ]
}

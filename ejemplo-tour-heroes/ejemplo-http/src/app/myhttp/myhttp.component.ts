import { Component } from '@angular/core';

import {OnInit } from '@angular/core';

import { Hero } from '../hero';
import { MyHTTPService } from '../my-httpservice.service';

@Component({
  selector: 'app-myhttp',
  templateUrl: './myhttp.component.html',
  styleUrls: ['./myhttp.component.css']
})
export class MyhttpComponent implements OnInit{
  heroes:Hero[] = [];

  constructor(private myHttpService:MyHTTPService){}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    console.log("http component before service");
    this.myHttpService.callBackend().subscribe(h => {
      console.log("before async");
      this.heroes=h;
      console.log("after async");
      console.log(this.heroes);
     }
    );
    console.log("http component after service");
    console.log(this.heroes);
  }

}

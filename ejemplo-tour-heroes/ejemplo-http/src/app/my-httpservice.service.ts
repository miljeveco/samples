import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Hero } from './hero';


@Injectable({
  providedIn: 'root'
})
export class MyHTTPService {

  myHttpHeroes:Hero[] = [];
  myUrlBackend:string = "http://localhost:3000/api/heroes";

  constructor(private http: HttpClient) {}

  callBackend():Observable<Hero[]> {
    console.log("http service before http");
    let r:Observable<Hero[]> = this.http.get<Hero[]>(this.myUrlBackend);
    console.log("http service after http");
    return r;
  }
}

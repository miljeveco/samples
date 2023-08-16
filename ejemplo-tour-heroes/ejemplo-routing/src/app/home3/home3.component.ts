import { Component } from '@angular/core';

import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit{

  myId:string|null = '-1';

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit(): void {
    this.testParameterOnInit();  
  }

  testParameterOnInit():void{
    this.myId = this.route.snapshot.paramMap.get('id');
    if(this.myId==null){
      this.myId='no ID';
    }
  }

  irAtras():void{
    this.location.back();
  }
}

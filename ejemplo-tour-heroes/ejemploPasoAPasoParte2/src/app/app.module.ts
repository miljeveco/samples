import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroeComponentComponent } from './heroe-component/heroe-component.component';
import { ListaComponent } from './lista/lista.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewheroeComponent } from './newheroe/newheroe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroeComponentComponent,
    ListaComponent,
    CarouselComponent,
    NavbarComponent,
    NewheroeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

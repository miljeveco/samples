import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';

const routes: Routes = [
    //{ path: '', redirectTo: '/home1', pathMatch: 'full' },
    { path: 'home1', component: Home1Component },
    { path: 'home2', component: Home2Component },
    { path: 'home3', component: Home3Component },
    { path: 'home3/:id', component: Home3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

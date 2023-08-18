import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyhttpComponent } from './myhttp/myhttp.component';

const routes: Routes = [
  {path:'myhttp', component:MyhttpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

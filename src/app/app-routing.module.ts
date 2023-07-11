import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';

const routes: Routes = [
  {path:"", component:AccueilComponent},
  {path:"snap", component:FaceSnapListComponent},
  {path:"snap/:id", component:FaceSnapListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

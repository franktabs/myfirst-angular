import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { DarkMode } from './service/theme.service';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    NavbarComponent,
    AccueilComponent,
    FaceSnapListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DarkMode],
  bootstrap: [AppComponent]
})
export class AppModule { }

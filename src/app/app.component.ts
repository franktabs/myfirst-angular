import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';
import { DarkMode } from './service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit  {

  constructor(private darkMode: DarkMode){}

  ngOnInit(): void {
      let docum = document.body;
      if(this.darkMode.dark){
        docum.classList.add('dark');
      }
  }
}


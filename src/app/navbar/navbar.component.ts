import { Component, OnInit } from '@angular/core';
import { DarkMode } from '../service/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  themeDark!:boolean;
  constructor(private darkMode:DarkMode){}

  ngOnInit(): void {
      this.themeDark = this.darkMode.dark
  }

  clickTheme(){
    console.log("click button theme");
    this.darkMode.dark = !this.darkMode.dark;
    this.themeDark = this.darkMode.dark;
  }
}

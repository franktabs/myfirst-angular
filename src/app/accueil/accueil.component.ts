import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  titleButton!: string;
  loading: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.titleButton = "Voir l'Application ";
  }

  handleClick(): void {
    setTimeout(() => {
      this.loading = true;
    }, 500);
    setTimeout(() => {
      this.router.navigateByUrl('snap');
    }, 3000);
  }
}

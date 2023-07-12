import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from './../models/face-snap.model';
import { Router } from '@angular/router';
import { DarkMode } from '../service/theme.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input()
  faceSnap!: FaceSnap;

  @Input()
  viewPhoto!: Boolean;

  buttonRetour!: Boolean;

  buttonLoading: boolean = false;
  themeDark!:boolean ;

  constructor(private router: Router, private darkMode:DarkMode) {}

  ngOnInit(): void {
    this.buttonRetour = this.viewPhoto;
    this.themeDark = this.darkMode.getDark();
  }

  handleClick() {
    if (this.buttonRetour) {
      this.router.navigateByUrl('/snap');
    } else {
      this.buttonLoading = true;
      setTimeout(()=>{
        this.router.navigateByUrl(`/snap/${this.faceSnap.id}`);
      }, 3000)
    }
  }
}

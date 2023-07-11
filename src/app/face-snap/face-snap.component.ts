import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from './../models/face-snap.model';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.buttonRetour = this.viewPhoto;
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

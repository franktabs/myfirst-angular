import { Component, OnInit } from '@angular/core';
import { DataFaceSnap } from '../service/faceSnap.service';
import { FaceSnap } from '../models/face-snap.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit {
  data!: FaceSnap[];
  viewPhoto:Boolean = false;
  constructor(
    private dataFaceSnap: DataFaceSnap,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = +this.route.snapshot.params['id'];
    let elmt = this.dataFaceSnap.findById(params);
    if (params && elmt) {
      this.viewPhoto = true;
      this.data = [elmt];
    } else {
      this.data = this.dataFaceSnap.data;
    }
  }
}

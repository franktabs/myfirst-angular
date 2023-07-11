import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: 'root',
})
export class DataFaceSnap {
  data: FaceSnap[] = [
    {
      id: 1,
      title: 'Bulle',
      snaps: 0,
      createdDate: new Date(),
      imageUrl:
        'https://cdn.pixabay.com/photo/2017/05/29/22/46/blowing-2355155_1280.jpg',
      description: 'Souffler, Bulles de savon, Bulles. Utilisation gratuite ',
    },
    {
      id: 2,
      title: 'Stylo',
      snaps: 0,
      createdDate: new Date(),
      imageUrl:
        'https://cdn.pixabay.com/photo/2018/02/17/14/32/pen-3160055_1280.jpg',
      description: 'Image : Stylo, Coloré, Léger. Utilisation gratuite',
    },
  ];

  findById(id: number) {
    let faceSnap = this.data.find((elm) => elm.id === id);
    return faceSnap;
  }
}

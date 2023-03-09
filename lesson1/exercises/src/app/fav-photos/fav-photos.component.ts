import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'This is taking too long';
  image1 = 'https://media.tenor.com/bQCHJwgCNuMAAAAM/kitten-cat.gif';
  image2 = 'https://media.tenor.com/gTg8ZSZMR6YAAAAM/scaler-create-impact.gif';
  image3 = 'https://thumbs.gfycat.com/CavernousWellwornArgali-max-1mb.gif'
  constructor() { }

  ngOnInit() {
  }

}
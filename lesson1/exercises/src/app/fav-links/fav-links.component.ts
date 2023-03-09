import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks: string [] = ['https://www.canva.com/colors/color-wheel/', 'https://replit.com/@nicteridat',]

  constructor() { }

  ngOnInit() {
  }

}

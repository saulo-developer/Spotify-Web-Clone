import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SearchBarService } from 'src/app/services/searchbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //public browserAll = []

  public songCards = [

    { song_id: 1,

      thumbnail: 'jioejoeijijisodj',

      title: 'Romantic Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      //song_link: "assets/mp3",

    },

    {

      thumbnail: 'jioejoeijijisodj',

      title: 'Romantic Songs',
      description: 'Relax and indulge with beautiful piano pieces'


    },

  ];


  constructor(private sb: SearchBarService) {}

  ngOnInit(): void {}


  onNavigation(pageName: string) {

    if(pageName === 'search') {

      this.sb.isSearchVisible.next(true);

    } else {

      this.sb.isSearchVisible.next(false);
    }

  }

}




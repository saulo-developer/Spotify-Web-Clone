import { Component } from '@angular/core';
import { SearchBarService } from 'src/app/services/searchbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public songCards = [

    {

      //thumbnail: 'jioejoeijijisodj',

      //title: 'Romantic Songs',
      //description: 'Relax and indulge with beautiful piano pieces'


    },

    {

      //thumbnail: 'jioejoeijijisodj',

      //title: 'Romantic Songs',
      //description: 'Relax and indulge with beautiful piano pieces'


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

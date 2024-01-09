import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarService } from 'src/app/services/searchbar.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
filterBrowsingList(_t13: HTMLInputElement) {
throw new Error('Method not implemented.');
}
onNavigationToLogin() {
throw new Error('Method not implemented.');
}
  public isSearchFiedlVisible: boolean = false;


  constructor(private router: Router, private sb: SearchBarService) {}

  ngOnInit(): void {

    this.sb.isSearchVisible.subscribe(status => {
     this.isSearchFiedlVisible = status;


    })

  }

  onNavigateToLogin() {
    this.router.navigate(['/','login']);

  }

}

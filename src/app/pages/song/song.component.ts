import { Component } from '@angular/core';
import { SongDataService } from 'src/app/services/song-data.services';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent {


  public songData!: any;

  constructor(private sd: SongDataService) {}

  ngOnInit(): void {

    this.sd.songData.subscribe((data) => (this.songData = data));
  }

}

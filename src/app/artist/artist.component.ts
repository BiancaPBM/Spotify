import { Component, OnInit, Input } from '@angular/core';
import { Artist } from './artist.model';
import { SpotifyService } from '../spotify.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
artist?:Artist;
artistId: string;
  constructor(private service:SpotifyService,private route:ActivatedRoute) {
  }
  ngOnInit(): void {
    var sub = this.route.params.subscribe(param =>this.artistId = param['id']);
    var search = this.service.searchById(this.artistId,"artists").subscribe(resp =>
      this.artist = resp)
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Artist } from './artist.model';
import { SpotifyService } from '../spotify.service';
import { Identifiers } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
artist1:Artist;
artistId: string;
@Input() artist:Artist;
  constructor(private service:SpotifyService,private route:ActivatedRoute) {
    this.artistId = this.route.snapshot.params.id;
  }
  ngOnInit(): void {
  }
  callServer(id: string, type: string) {
    this.service.searchById(id,type).subscribe(res => console.log(res));
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Album } from './album.model';
import { ActivatedRoute} from '@angular/router'
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album?: Album;
  id:string;
  constructor(private route:ActivatedRoute, private service:SpotifyService) {
   }

  ngOnInit(): void {
   var sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      });
      console.log(this.id);
      if(this.id){
        this.service.searchById(this.id, "albums").subscribe(
          resp =>this.album = resp);
      }

    }
}

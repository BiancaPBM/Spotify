import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import{Track} from '../track/track.model'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: Track[] = new Array<Track>();
  constructor(private service:SpotifyService) { }

  ngOnInit(): void {
  }

  assignValue(val:any){
    console.log(val.value);
  }
  searchForTrack(query: any)
  {
    this.service.search(query.value).subscribe( response =>
      {this.results = response; console.log(this.results)
      this.goToBottom();}
      );
  }
  goToBottom()
  {
    window.scrollTo(0,900);
  }
}

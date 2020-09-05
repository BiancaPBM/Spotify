import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { SpotifyService } from "../spotify.service";
import { Track } from "../track/track.model";
import { Router, ActivatedRoute, Params } from "@angular/router";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit, AfterViewInit {
  results: Track[] = new Array<Track>();
  constructor(
    private service: SpotifyService,
    private act: ActivatedRoute,
    private route: Router,
    private cdRef: ChangeDetectorRef
  ) {}
  searchInput;
  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this.searchInput = this.act.snapshot.queryParams['search'];
    if(this.searchInput){
      this.searchForTrack();
    }
  }

  searchForTrack() {
    if(this.searchInput){
      this.service.search(this.searchInput).subscribe((response) => {
        this.results = response;
        this.route.navigate([], {
          relativeTo: this.act,
          queryParams: {
            search: this.searchInput
          },
        });
        this.cdRef.detectChanges();
        this.goToBottom();
      });
    }
  }

  goToBottom(): void {
    window.scroll(0, 900);
  }
}

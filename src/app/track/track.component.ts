import { Component, OnInit, Input } from '@angular/core';
import { Track } from './track.model';
import {ActivatedRoute, ParamMap, Route} from '@angular/router';
@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
 @Input() track: Track;
 constructor(
  private route: ActivatedRoute,
) {}
name:any
ngOnInit() {
  this.route.queryParams.subscribe(params => {
    this.name = params['name'];
  });
}
}

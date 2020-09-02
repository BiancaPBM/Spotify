import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Track } from "./track/track.model";
import { map } from "rxjs/operators";
import { isNgTemplate } from "@angular/compiler";
import { Artist } from "./artist/artist.model";
import { AbstractJsEmitterVisitor } from "@angular/compiler/src/output/abstract_js_emitter";
import { Album } from "./album/album.model";
import { query } from '@angular/animations';
import { ArtistTrack } from './artist/artist-track.model';
let headers = new HttpHeaders({
  Authorization: "Bearer " + localStorage.getItem("access_token"),
});
@Injectable({
  providedIn: "root",
})

export class SpotifyService {
  CLIENT_ID: string = "2666276c28104707aaa7d806b02f79e0";
  CLIENT_SECRET: string = "59325e6e440241f69897a4cf1cef740c";
  URL_GET_TOKEN: string = "https://accounts.spotify.com/api/token";
  ACCESS_TOKEN: string = "";
  URL_API: string = "https://api.spotify.com/v1/";
  obj: any = {};

  constructor(private http: HttpClient) {}

  refreshToken() {
     headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Authorization: "Basic " + btoa(this.CLIENT_ID + ":" + this.CLIENT_SECRET),
    });

    let body = "grant_type=client_credentials";
    return this.http
      .post(this.URL_GET_TOKEN, body, { headers })
      .subscribe((response) => {
        localStorage.setItem("access_token", response["access_token"]);
        let date = new Date();
        let hourLimit = date.getHours() + response["expires_in"]/3600;
        localStorage.setItem("hour_limit", hourLimit + ":" + date.getMinutes().toString());
        localStorage.setItem("day", new Date().getDay().toString());
      });
  }

 isTokenExpired():boolean{
  const token = localStorage.getItem("access_token");
  const day = Number(localStorage.getItem("day"));
  const hourDetail = localStorage.getItem("hour_limit")?.split(":");
  const date = new Date();

  if( token == null || day == null || hourDetail == null)
    return true;

    const actualDay = new Date().getDay();

  if(actualDay != day)
    return true;
  else if(date.getHours() >= Number(hourDetail[0]) && date.getMinutes() >= Number(hourDetail[1]))
    return true;
  return false;
 }

 rebuildHeader(){
   headers =  new HttpHeaders({
    Authorization: "Bearer " + localStorage.getItem("access_token"),
  });
 }

  search(query: string) {
    let params = [`q=${query}`, "type=track"].join("&");
    let queryUrl = this.URL_API+ 'search' + `?${params}`;
    let oldToken = this.isTokenExpired();
  if(oldToken == true)
  {
    var x =  this.refreshToken();
    var y = this.rebuildHeader();
  }
    return this.http.get(queryUrl, { headers}).pipe(
      map((response) => response["tracks"].items),
      map((items) =>
        items.map((track) => {
          let artists = track.artists.map(element =>  new ArtistTrack(element.name, element.id, element.href));
          let album = new Album(
            track.album.name,
            artists,
            track.album.album_type,
            track.album.total_tracks,
            track.album.release_date,
            track.album.images[1].url,
            track.album.id,
            track.album.images[1].height,
            track.album.images[1].width

          );
          return new Track(track.name,track.id, album, artists, track.preview_url);
        })
      )
    );
  }

  searchById(id:string, type:string){
    const query = this.URL_API +type + '/'+id;
    return this.http.get(query,{headers}).pipe(
      map((response:any) =>
        {  let result;
           switch (type){
          case 'albums':
             result =  new Album(response.name, response.artists, response.album_type, response.total_tracks, response.release_date, response.images[0].url, response.id, response.images[0].height, response.images[0].width);
          break;
          case 'artists':
            result = new Artist(response.name,response.id,response.href,response.genres,response.images[1].url,response.followers.total);
          break;
          default:
            break;
          }
          return result;
          })
    )
  }
}

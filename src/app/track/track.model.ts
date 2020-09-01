import {Artist} from '../artist/artist.model'
import {Album} from '../album/album.model'

export class Track{
  name: string;
  album:Album;
  artists:Artist[];
  previewUrl:string;
  id:string
 constructor(name:string, id:string, album:Album, artists:Artist[],previewURl:string){
   this.name = name;
   this.id = id;
   this.album = album;
   this.artists = artists;
   this.previewUrl = previewURl;
 }
}

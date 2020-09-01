import {Artist} from '../artist/artist.model'
export class Album {
  artists: Artist[];
  name: string;
  albumType:string;
  totalTracks:string;
  releaseDate:string;
  image:string;
  id:string
  height:number;
  width:number;
  constructor(name:string, artists: Artist[], albumType:string, totalTracks:string, releaseDate:string,image: string,id:string,height:number,width:number)
  {
    this.name = name;
    this.id = id;
    this.artists = artists;
    this.albumType = albumType;
    this.totalTracks = totalTracks;
    this.releaseDate = releaseDate;
    this.image = image;
    this.height = height;
    this.width = width;
  }
  }



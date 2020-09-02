  export class Artist{
    name:string;
    id:string;
    href:string;
    genres:string[];
    image:any;
    followers:string;

    constructor(name:string, id:string, href:string,genres:string[], image:any, followers:string)
    {
      this.name = name;
      this.id = id;
      this.href = href;
      this.genres = genres;
      this.image = image;
      this.followers = followers
    }
  }

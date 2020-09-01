import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { Album } from './album/album.model';
import { AlbumComponent } from './album/album.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path:"",component:SearchComponent, pathMatch:"full"},
  {path:"album/:id", component:AlbumComponent},
  {path:"artist/:id",component:ArtistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

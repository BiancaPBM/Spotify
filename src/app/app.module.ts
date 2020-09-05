import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SpotifyService } from './spotify.service';
import { HttpClientModule } from '@angular/common/http';
import { TrackComponent } from './track/track.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './material.module';
import { NavigatorComponent } from './navigator/navigator.component';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TrackComponent,
    AlbumComponent,
    ArtistComponent,
    NavigatorComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MyMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import {Album} from "../models";
import {ALBUMS} from "../fake-db";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  albums: Album[];
  newAlbum: Album;
  loaded: boolean;
  constructor(private albumService: AlbumsService) {
    this.albums = [];
    this.newAlbum = {} as Album;
    this.loaded = true;
  }
  ngOnInit(): void{
    this.getAlbums();
  }
  getAlbums(){
    //this.albums = ALBUMS;
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }
  addAlbum(){
    this.loaded = false;
    this.albumService.addAlbum(this.newAlbum).subscribe((album) => {
      this.albums.push(album);
      this.loaded = true;
      this.newAlbum = {} as Album;
    })
  }
}

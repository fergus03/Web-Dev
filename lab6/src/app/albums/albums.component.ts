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
  constructor(private albumService: AlbumsService) {
    this.albums = [];
  }
  ngOnInit(): void{
    //this.albums = ALBUMS;
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }
}

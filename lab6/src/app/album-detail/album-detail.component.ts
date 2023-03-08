import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ALBUMS} from "../fake-db";
import {Album} from "../models";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent {
  album: Album;
  loaded: boolean;
  // @ts-ignore
  name: string;
  constructor(private route: ActivatedRoute,
              private albumService: AlbumsService) {
    this.album = {} as Album;
    this.loaded = true;
  }

  ngOnInit(): void{
    this.getAlbum();
  }
  getAlbum(): void{
    //const id = Number(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      //this.album = ALBUMS.find((album) => album.id === id) as Album;
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded =  true;
      });
    })
  }
  updateAlbum(): void{
    this.loaded = false;
    this.albumService.updateAlbum(this.album).subscribe((album) => {
      console.log(album);
      this.album.title = this.name;
      this.loaded = true;
    })
  }
}

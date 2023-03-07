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
  constructor(private route: ActivatedRoute,
              private albumService: AlbumsService) {
    this.album = {} as Album;
    this.loaded = true;
  }

  ngOnInit(): void{
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
}

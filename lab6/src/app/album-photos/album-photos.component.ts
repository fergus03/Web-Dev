import { Component } from '@angular/core';
import { Album} from "../models";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Photo} from "../models";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent {
  album: Album;
  loaded: boolean;
  photos: Photo[];

  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumService: AlbumsService) {
    this.album = {} as Album;
    this.loaded = true;
    this.photos = [];
  }
  ngOnInit(): void{
    this.getAlbumPhotos();
  }
  getAlbumPhotos(): void{
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.albumService.getAlbumPhotos(id).subscribe((photo) => {
        this.photos = photo;
        this.loaded = true;
      })
    })
  }
  returnBack(): void{
    this.location.back();
  }
}

import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { HttpService } from '../services/http.service';
import { PopupshareComponent } from './popupshare/popupshare.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  responseObject: any = { photos: [] };
  loading: boolean = false;

  gridColumns = 4;

  constructor(private httpService: HttpService,
    public dialog: MatDialog) { }

  clickToShare(link: string) {
    const dialogRef = this.dialog.open(PopupshareComponent,
      {
        data: link,
        width: '400px'
      });
  }

  ngOnInit(): void {
    this.loading = true;
    this.httpService.getPhotoList().pipe(finalize(() => this.loading = false))
      .subscribe(obj => this.responseObject = obj);
  }
}

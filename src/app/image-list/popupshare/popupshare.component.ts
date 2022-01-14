import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageListComponent } from '../image-list.component';

@Component({
  selector: 'app-popupshare',
  templateUrl: './popupshare.component.html',
  styleUrls: ['./popupshare.component.css']
})
export class PopupshareComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ImageListComponent>,
                      @Inject(MAT_DIALOG_DATA) public data: any) { }

  onCancel() { this.dialogRef.close(); }

  ngOnInit(): void {
  }

}

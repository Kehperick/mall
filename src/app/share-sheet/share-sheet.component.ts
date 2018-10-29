import { Component, OnInit } from '@angular/core';
import {MatBottomSheet,MatBottomSheetRef} from '@angular/material';
@Component({
  selector: 'app-share-sheet',
  templateUrl: './share-sheet.component.html',
  styleUrls: ['./share-sheet.component.css']
})
export class ShareSheetComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<ShareSheetComponent>) { }

  ngOnInit() {
  }

  openLink(event: MouseEvent):void{

    this.bottomSheetRef.dismiss();
    event.preventDefault();

  }

}

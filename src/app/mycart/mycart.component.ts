import { Component, OnInit,Inject } from '@angular/core';
import {  ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog,MatDialogRef,MatDialogConfig,MatBottomSheet}  from '@angular/material';
import { MatSnackBar } from '@angular/material';
import{ShareSheetComponent} from '../share-sheet/share-sheet.component';

export interface confirmDelete{

}

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {



  constructor(public snackBar: MatSnackBar,public dialog: MatDialog,private bottomSheet:MatBottomSheet) {}


  openBottomSheet():void{
    this.bottomSheet.open(ShareSheetComponent);
  }

  // snack bar for notifiication method
 openSnackBar(){
  this.snackBar.open("item added to favorite", "UNDO",{
    duration: 2000
  })
}


public openDialog(): void{
  const dialogRef= this.dialog.open(ConfirmationDialogComponent,{data: {name:  "Are you sure you want to remove this item  from cart ?"}});
  };




  ngOnInit() {
  }
  public myblue=" #2962ff";
  public whiteIcon="white";

// hidden property for the empty cart
public isCartEmpty:boolean=false;


}

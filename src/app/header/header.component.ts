import { Component, OnInit } from '@angular/core';
// import {  trigger , state,  style,  transition, animate} from '@angular/animations';

//
export interface SidenavListItem{
  name  : string;
  icon  : string;

}
export interface personalListItem{
  personalData  : string;
  personalIcon  : string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {

  constructor() { }

  menuState:string='out';

  ngOnInit() {
  }
  openSidenav(){
    this.menuState=this.menuState===  'out' ? 'in'  : 'out';

  }


  listItem  : SidenavListItem[] =[

    {name : 'furniture', icon  : 'event_seat'},
    {name : 'electronics', icon  : 'smartphone'},
    {name : 'home appliances', icon  : 'tv'},
    {name : 'fashion', icon  : 'face'},
    {name : 'shops', icon  : 'store'}
  ];
  public title="";
  user  : personalListItem[]=[
    {personalData : 'my account', personalIcon  : 'person'},
    {personalData : 'my cart',  personalIcon  : 'shopping_cart'},
    {personalData : 'my wishlist', personalIcon  : 'favorite'},
    {personalData : 'my shop', personalIcon : 'store' }
  ];

}

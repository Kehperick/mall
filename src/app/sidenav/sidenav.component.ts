import { Component, OnInit } from '@angular/core';
import {  SidenavClass} from '../classes/sidenav-class';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {


//creating an object of class sidenav
  sideContent:SidenavClass[];
  constructor() {
    this.sideContent=[
      new SidenavClass("thisItem","home")
    ]

   }

  ngOnInit() {
  }
  //
  // more: SidenavListItem[]=[
  //   {name:  'help', icon: 'help'},
  //   {name:  'terms of service', icon ''}
  // ]
}

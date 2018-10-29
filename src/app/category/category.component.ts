import { Component, OnInit } from '@angular/core';

export interface Variable{
  name: string;
  icon: string;
}

export interface personalListItem{
  personalData  : string;
  personalIcon  : string;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  listItem  : Variable[] =[
    {name : 'home', icon  : 'home'},
    {name : 'furniture', icon  : 'event_seat'},
    {name : 'electronics', icon  : 'smartphone'},
    {name : 'home appliances', icon  : 'tv'},
    {name : 'fashion', icon  : 'watch'},
    {name : 'shops', icon  : 'store'}
  ];

}

import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { SmallSearchComponent } from './small-search/small-search.component';
// import { HeaderComponent} from './header/header.component';
import { LoginComponent} from './login/login.component';
import {  SidenavComponent  } from './sidenav/sidenav.component';
import {  MycartComponent } from './mycart/mycart.component';
import {  CategoryComponent  } from './category/category.component';
import {  LargeFormComponent  } from './large-form/large-form.component';
import {  CartComponent} from './cart/cart.component';
import {  SingleItemComponent} from './single-item/single-item.component';
import {  NotificationPageComponent} from './notification-page/notification-page.component';
import {   FormLoginComponent } from './form-login/form-login.component';
import {  RegisterComponent } from './register/register.component';
import { HomeComponent} from './home/home.component';
import {  PolicyComponent} from './policy/policy.component';
import {  ListingComponent} from './listing/listing.component';
import {  ItemComponent} from './item/item.component';
import {  ListingSmallComponent} from './listing-small/listing-small.component';
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SmallSearchComponent},
  {path: 'notifications', component: NotificationPageComponent},
  {path: 'login', component: LoginComponent},
  {path:  'sidenav',  component:  SidenavComponent},
  {path:  'cart', component:  MycartComponent},
  {path:  'category',  component:  CategoryComponent},
  {path: 'policy', component: PolicyComponent},
  {path:  'login_form',
    component: LargeFormComponent ,
    children: [
        {path: 'mini_login', component:FormLoginComponent},
      {path: 'register', component: RegisterComponent},
    ]
  },
  {path:  'my_cart',  component:  CartComponent},
    {path: 'listing/default', component: ListingComponent},
      {path: 'listing', component: ListingSmallComponent},
    {path: 'item', component: ItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents= [
  NotificationPageComponent,
  SmallSearchComponent,
  SingleItemComponent,
  LoginComponent,
  SidenavComponent,
  MycartComponent,
  CategoryComponent,
  LargeFormComponent,
  CartComponent,
  FormLoginComponent,
  RegisterComponent,
  HomeComponent,
  PolicyComponent,
  ListingComponent,
  ListingSmallComponent,
  ItemComponent

]

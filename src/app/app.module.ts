import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule,
  MatToolbarModule,
  MatRadioModule,
  MatChipsModule,
  MatDialogModule,
  MatSnackBarModule ,
  MatProgressSpinnerModule,
  MatGridListModule,
   MatButtonModule,
   MatDividerModule,
   MatExpansionModule,
   MatInputModule,
    MatIconModule,
    MatListModule,
     MatCardModule,
     MatSelectModule,
     MatSidenavModule,
     MatBadgeModule,
     MatTooltipModule,
    MatBottomSheetModule,
    MatStepperModule,
    MatTabsModule,
    MatSliderModule} from '@angular/material'

import {AppRoutingModule, routingComponents} from './app-routing.module';

import {  FormsModule} from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';

import {  HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SmallSearchComponent } from './small-search/small-search.component';
import { SingleItemComponent } from './single-item/single-item.component';
import { LoginComponent } from './login/login.component';
import { BackComponent } from './back/back.component';
import { LargeFormComponent } from './large-form/large-form.component';
import { CategoryComponent } from './category/category.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MycartComponent } from './mycart/mycart.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { CartComponent } from './cart/cart.component';
import { NotificationPageComponent } from './notification-page/notification-page.component';
import { AccountComponent } from './account/account.component';
import { MyshopComponent } from './myshop/myshop.component';
import { RegisterComponent } from './register/register.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { HomeComponent } from './home/home.component';
import { ShareSheetComponent } from './share-sheet/share-sheet.component';
import { PolicyComponent } from './policy/policy.component';
import { ListingComponent } from './listing/listing.component';
import { FilterComponent } from './filter/filter.component';
import { ItemComponent } from './item/item.component';
import { ListingSmallComponent } from './listing-small/listing-small.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SmallSearchComponent,
    routingComponents,
    SingleItemComponent,
    LoginComponent,
    BackComponent,
    LargeFormComponent,
    CategoryComponent,
    SidenavComponent,
    MycartComponent,
    ConfirmationDialogComponent,
    CartComponent,
    NotificationPageComponent,
    AccountComponent,
    MyshopComponent,
    RegisterComponent,
    FormLoginComponent,
    HomeComponent,
    ShareSheetComponent,
    PolicyComponent,
    ListingComponent,
    FilterComponent,
    ItemComponent,
    ListingSmallComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatMenuModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatDialogModule,
    MatBadgeModule,
    MatToolbarModule,
    MatDividerModule,
    MatTooltipModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatBottomSheetModule,
    MatStepperModule,
    MatSliderModule,
    HttpClientModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ConfirmationDialogComponent,ShareSheetComponent]
})
export class AppModule { }

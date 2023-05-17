import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabViewModule } from 'primeng/tabview';
import { HomeComponent } from './components/home/home.component';
import { BrandsComponent } from './components/home/brands/brands.component';
import { LayoutModule } from './layout/layout.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductsComponent } from './components/home/products/products.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CartComponent } from './components/cart/cart.component';
import { DataViewLayoutOptions, DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    BrandsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    AppRoutingModule,
    FormsModule,
    TabViewModule,
    CarouselModule,
    LayoutModule,
    ButtonModule,
    SlickCarouselModule,
    TagModule,
    DataViewModule,
    RatingModule,
    InputNumberModule,
    ToastModule
  ],
  providers: [DataViewLayoutOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }

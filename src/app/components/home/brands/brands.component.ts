import { Component } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
  slideConfig = {"slidesToShow": 6, 
  "slidesToScroll": 1,
  "enabled": true,
  "arrows": false,
  "autoplay": true,
  "infinite": false,
  "autoplaySpeed": 4000,

};
  title = 'ng-carousel-demo';
   
  slides = [
    {img: "../../../assets/brands/aloha.png"},
    {img: "../../../assets/brands/best.png"},
    {img: "../../../assets/brands/bravo.png"},
    {img: "../../../assets/brands/dream.png"},
    {img: "../../../assets/brands/easter.png"},
    {img: "../../../assets/brands/king.png"},
    {img: "../../../assets/brands/love.png"},
    {img: "../../../assets/brands/original.png"},
    {img: "../../../assets/brands/special.png"},
    {img: "../../../assets/brands/the.png"},
    {img: "../../../assets/brands/with.png"},
  ];
}

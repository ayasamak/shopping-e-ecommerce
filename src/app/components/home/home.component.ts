import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  slideConfig = {"slidesToShow": 1, 
  "slidesToScroll": 1,
  "enabled": true,
  "autoplay": true,
  "infinite": false,
  "speed": 300,
};
  title = 'ng-carousel-demo';
   
  slides = [
    {img: "../../../assets/paner1.webp",title:'The biggest sale',subtitle:'Special for today'},
    {img: "../../../assets/paner2.webp",title:'Summer collection',subtitle:'New Arrivals On Sale'},
    {img: "../../../assets/paner3.webp",title:'The biggest sale',subtitle:'Special for today'},
  ];

  advantages=[
    {
      icon:"fa-solid fa-trophy fa-2xl",
      title:"BONUS PLUS",
      subtitle:"Make fun of shopping and collect bonuses"
    },
    {
      icon:"fa-solid fa-truck-pickup fa-2xl",
      title:"FREE SHIPPING",
      subtitle:"Free shipping on all orders over $99"
    },
    {
      icon:"fa-solid fa-sack-dollar fa-2xl",
      title:"MONEY BACK GUARANTEE",
      subtitle:"30 Days money return guarantee"
    },
    {
      icon:"fa-regular fa-clock fa-2xl",
      title:"ONLINE SUPPORT 24/7",
      subtitle:"Call us: (+100) 123 456 7890"
    }
  ]

  products = [
    {img: "../../../assets/products/product1.webp",title:'New Laptops',subtitle:'Now starting at $1299'},
    {img: "../../../assets/products/product2.webp",title:'Summer collection',subtitle:'New Arrivals On Sale'},
    {img: "../../../assets/products/product3.webp",title:'Shoes for you',subtitle:'Now starting at $89'},
    {img: "../../../assets/products/product4.webp",title:'New mobile phone',subtitle:'Special for today'},
    {img: "../../../assets/products/product5.webp",title:'Watch collection',subtitle:'Special for today'},
    {img: "../../../assets/products/product6.webp",title:'Popular jewellery brands',subtitle:'Now starting at $1799'}
  ];
  slickInit(e:any) {
    console.log('slick initialized');
  }
     
}

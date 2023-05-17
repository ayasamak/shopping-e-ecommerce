import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { GenericServiceService } from 'src/app/generic-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [MessageService]
})
export class ProductsComponent implements OnInit {
  products: any = [];
  onsalse:any=[]
  toprated:any=[]
  newarrival:any=[]
  responsiveOptions!: any[];
  constructor(public ProductsService:ProductsService,public GenericServiceService:GenericServiceService,private messageService: MessageService) {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    this.products=this.ProductsService.getProductsData()
    this.onsalse=this.ProductsService.getonsale()
    this.toprated=this.ProductsService.toprated()
    this.newarrival=this.ProductsService.newarrival()
  }

  addtocart(data:any){    
   this.GenericServiceService.$CARTVALUE.next(1+this.GenericServiceService.$CARTVALUE.value)
   this.GenericServiceService.cartproducts(data)
   this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Add To Card' });
  }
  

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';

      default: return 'INSTOCK'
    }
  }

}



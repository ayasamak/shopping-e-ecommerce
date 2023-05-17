import { Component } from '@angular/core';
import { GenericServiceService } from 'src/app/generic-service.service';

@Component({
  
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartproducts:{}[]=[]
constructor(public GenericServiceService:GenericServiceService){
  this.cartproducts=this.GenericServiceService.cartproducrs
}

removeitem(data:any){
this.GenericServiceService.deleteproduct(data)
}

changed(e:any){
  console.log(e);
  
}

getSeverity (product:any) {
  switch (product.inventoryStatus) {
      case 'INSTOCK':
          return 'success';

      case 'LOWSTOCK':
          return 'warning';

      case 'OUTOFSTOCK':
          return 'danger';

      default:
          return '';
  }
};
}

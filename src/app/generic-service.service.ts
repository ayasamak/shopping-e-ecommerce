import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericServiceService {
  public cartproducrs:{}[]=[]
  $CARTVALUE=new BehaviorSubject<number>(0)
  constructor() { }

  cartproducts(newproduct:{id:number,qun:number}){
    if(!this.cartproducrs.includes(newproduct)){
      this.cartproducrs.push(newproduct)
      newproduct.qun=1
    }
    else{
      this.cartproducrs.filter((product:any)=>{
      product.id==newproduct.id?product.qun+=1:product.qun
      })
    }    
  }

  deleteproduct(data:{qun:number}){
    console.log(this.cartproducrs.indexOf(data));
    
    this.cartproducrs.splice(this.cartproducrs.indexOf(data),1)
    let productqun=this.$CARTVALUE.value-data.qun
     console.log(productqun);
    this.$CARTVALUE.next(productqun)  
  }
}

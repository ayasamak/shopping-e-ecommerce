import { Component } from '@angular/core';
import { GenericServiceService } from 'src/app/generic-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cartvalue!:number;
constructor(public GenericServiceService:GenericServiceService){
  this.GenericServiceService.$CARTVALUE.subscribe(val=>this.cartvalue=val)
}
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { LayoutModule } from '../layout/layout.module';
import { JewelleryComponent } from './jewellery/jewellery.component';


@NgModule({
  declarations: [
    ComponentsComponent,
    JewelleryComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    LayoutModule
  ]
})
export class ComponentsModule { }

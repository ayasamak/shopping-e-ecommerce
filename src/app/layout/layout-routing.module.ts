import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [{ path: '', component: LayoutComponent ,children:[
  {path:'',component:NavbarComponent}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

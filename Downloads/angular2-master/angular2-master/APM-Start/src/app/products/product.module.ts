import { NgModule } from '@angular/core';


import { ProductListComponent } from "./product-list.component";


import { RouterModule,CanActivate } from '@angular/router';

import { ProductService } from './product.service';
import { ConvertToSpacesPipe } from "../shared/convert-to-space.pipe";

import { ProductDetailsComponent } from "./product-details.component";
import { ProductsGuardService } from "./products-guard.service";

import { SharedModule } from './../shared/shared.module';


@NgModule({
  imports: [ 
    RouterModule.forChild([
        { path: 'products', component: ProductListComponent },
        { path: 'products/:id',
          canActivate: [ ProductsGuardService ],
          component: ProductDetailsComponent }
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ConvertToSpacesPipe
   
  
  ],
  providers: [
    ProductService,
    ProductsGuardService
  ]
})
export class ProductModule { }

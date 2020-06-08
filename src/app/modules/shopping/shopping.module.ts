import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingListingComponent } from './pages/shopping-listing/shopping-listing.component';
import { ShoppingCheckoutComponent } from './pages/shopping-checkout/shopping-checkout.component';
import { ShoppingShippingComponent } from './pages/shopping-shipping/shopping-shipping.component';
import { ShoppingSuccessComponent } from './pages/shopping-success/shopping-success.component';
import { ShoppingCardComponent } from './components/shopping-card/shopping-card.component';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [ShoppingListingComponent, ShoppingCheckoutComponent, ShoppingShippingComponent, ShoppingSuccessComponent, ShoppingCardComponent, LoaderComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    SharedModule
  ]
})
export class ShoppingModule { }

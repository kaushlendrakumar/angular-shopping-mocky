import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListingComponent } from './pages/shopping-listing/shopping-listing.component';
import { ShoppingCheckoutComponent } from './pages/shopping-checkout/shopping-checkout.component';
import { ShoppingShippingComponent } from './pages/shopping-shipping/shopping-shipping.component';
import { ShoppingSuccessComponent } from './pages/shopping-success/shopping-success.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'listing',
    pathMatch: 'full'
  },
  {
    path: 'listing',
    component: ShoppingListingComponent
  },
  {
    path: 'cart',
    component: ShoppingCheckoutComponent
  },
  {
    path: 'shipping',
    component: ShoppingShippingComponent
  },
  {
    path: 'success',
    component: ShoppingSuccessComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }

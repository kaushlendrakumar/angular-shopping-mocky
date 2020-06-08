import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-shopping-checkout',
  templateUrl: './shopping-checkout.component.html',
  styleUrls: ['./shopping-checkout.component.scss']
})
export class ShoppingCheckoutComponent implements OnInit {

  pageDetails = {}
  constructor(private commonService: CommonService) { 
    this.pageDetails['details'] = this.commonService.appDetails;
    this.pageDetails['selectdItems'] = 
      this.pageDetails['details']['itemList'].filter(item => item.selectedCount > 0);
    this.pageDetails['totalPrice'] = 0;
    this.pageDetails['selectdItems'].map(item => {
      this.pageDetails['totalPrice'] += (item.selectedCount * item.price);
    });
    if(this.pageDetails['selectdItems'].length === 0){
      this.commonService.redirectToPage('');
    }
  }

  ngOnInit() {
    this.pageDetails['details'] = this.commonService.appDetails;
  }

  // start updateCartItem
  updateCartItem(action, itemDetails){
    this.commonService.updateTotalCartItem(action, itemDetails);
    this.pageDetails['totalPrice'] = 0;
    this.pageDetails['selectdItems'].map(item => {
      this.pageDetails['totalPrice'] += (item.selectedCount * item.price);
    });
  }
  // end updateCartItem

  checkoutBtn(){
    this.pageDetails['details']['selectdItems'] = 
      this.pageDetails['details']['itemList'].filter(item => item.selectedCount > 0);
    this.commonService.redirectToPage('shipping');
  }

}

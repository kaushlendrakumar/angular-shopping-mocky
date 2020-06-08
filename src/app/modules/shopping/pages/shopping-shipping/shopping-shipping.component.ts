import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-shopping-shipping',
  templateUrl: './shopping-shipping.component.html',
  styleUrls: ['./shopping-shipping.component.scss']
})
export class ShoppingShippingComponent implements OnInit {

  pageDetails = {}

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.pageDetails['details'] = this.commonService.appDetails;
    this.pageDetails['totalPrice'] = 0;
    this.pageDetails['formDetails'] = {
      name : '',
      address:{
        line1: '',
        line2: ''
      },
      city: ''
    }
    
    if(!this.pageDetails['details']['selectdItems'] || this.pageDetails['details']['selectdItems'].length === 0){
      this.commonService.redirectToPage('');
    } else{
      this.pageDetails['details']['selectdItems'].map(item => {
        this.pageDetails['totalPrice'] += (item.selectedCount * item.price);
      });
    }
  }

  placeOrderBtn(){
    this.commonService.redirectToPage('success');
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss']
})
export class ShoppingCardComponent implements OnInit {
  @Output() updateCard = new EventEmitter();
  @Input() cardDetails: any = {};

  pageDetails = {}
  constructor(private commonService: CommonService) { 
    this.pageDetails['details'] = this.commonService.appDetails;
  }

  ngOnInit() {
  }

  // start updateCartItem
  updateCartItem(action, itemDetails){
    this.commonService.updateTotalCartItem(action, itemDetails);
    this.updateCard.emit("Hi, I am output from child")
  }
  // end updateCartItem

}

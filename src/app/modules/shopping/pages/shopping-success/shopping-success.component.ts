import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-shopping-success',
  templateUrl: './shopping-success.component.html',
  styleUrls: ['./shopping-success.component.scss']
})
export class ShoppingSuccessComponent implements OnInit {

  constructor(private commonService: CommonService) { 
    this.commonService.updateTotalCartItem('delAll', '');
    this.commonService.appDetails['itemList'].map(item => item.selectedCount = 0);
    this.commonService.appDetails['itemListShow'] = [];
  }

  ngOnInit() {
  }

  homeBtn(){
    this.commonService.redirectToPage('');
  }

}

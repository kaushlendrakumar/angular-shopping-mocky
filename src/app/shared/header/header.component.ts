import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pageDetails = {}
  totalCartItem = 0;

  constructor(private commonService: CommonService) { 
    this.commonService.getTotalCartItem().subscribe(count => {
      this.totalCartItem = count;
    }); 
  }

  ngOnInit() {
    this.totalCartItem = this.commonService.totalCartItem;
    this.pageDetails['appDetails'] = this.commonService.appDetails;
  }

  cartBtn(){
    this.commonService.redirectToPage('cart');
  }

}

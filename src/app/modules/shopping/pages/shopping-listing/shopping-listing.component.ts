import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-shopping-listing',
  templateUrl: './shopping-listing.component.html',
  styleUrls: ['./shopping-listing.component.scss']
})
export class ShoppingListingComponent implements OnInit {

  pageDetails = {}
  loaderDetails = {
    isVisible: false
  };
  constructor(private commonService: CommonService) {
    this.pageDetails['details'] = this.commonService.appDetails;    
  }

  ngOnInit() {
    if(this.pageDetails['details']['itemList'].length === 0){
      this.loaderDetails.isVisible = true;
      this.getItemList().then(res => {
        if (res) {
          this.pageDetails['details']['itemListShow'] = this.pageDetails['details']['itemList'];
          this.pageDetails['itemListShow'] = this.pageDetails['itemList'];
          this.loaderDetails.isVisible = false;
        }
      }, error => {
        console.log("getItemList error....", error);
        this.loaderDetails.isVisible = false;
      });
    }
  }
  
  // start updateCardHandler
  updateCardHandler(result) {
    console.log("updateCardHandler:", result)
  }
  // end updateCardHandler  

  // start getItemList
  getItemList(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.commonService.getListItems().subscribe(
        getListItemsResp => {
          this.pageDetails['details']['itemList'] = getListItemsResp['data'];
          resolve(true);
        },
        error => {
          console.log("getListItemsResp error...", error);
          reject(error);
        }
      );
    })
  }
  // end getItemList
}



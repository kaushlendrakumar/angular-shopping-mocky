import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  totalCartItem = 0;

  public cartItemCount = new Subject<number>();

  constructor(private router: Router, private httpclient: HttpClient) { }

  appDetails = {
    notFoundImage: 'https://www.gardensbythebay.com.sg/etc/designs/gbb/clientlibs/images/common/not_found.jpg',
    userName: 'Kaushlendra',
    userAvtar: 'https://p7.hiclipart.com/preview/304/305/226/web-development-computer-icons-avatar-business-user-profile.jpg',
    itemList: []
  }

  //start updateTotalCartItem
  updateTotalCartItem(action, itemDetails) {
    if (action === "add" && parseInt(itemDetails['quantity']) > 0) {
      if(itemDetails['selectedCount'] && itemDetails['selectedCount'] === parseInt(itemDetails['quantity'])){
        alert(`Reached Maximum Available Quantity of ${itemDetails['name']} is ${itemDetails['quantity']}`);
        return;
      }
      itemDetails['selectedCount'] = itemDetails['selectedCount'] ? (itemDetails['selectedCount'] += 1) : (itemDetails['selectedCount'] = 1); 
      this.totalCartItem += 1;
      this.cartItemCount.next(this.totalCartItem);
    }

    if (action === "del" && this.totalCartItem != 0) {
      itemDetails['selectedCount'] = itemDetails['selectedCount'] ? (itemDetails['selectedCount'] -= 1) : (itemDetails['selectedCount'] = 0); 
      this.totalCartItem -= 1;
      this.cartItemCount.next(this.totalCartItem);
    }

    if(action == "delAll"){
      this.appDetails['itemList'] = [];
      this.totalCartItem = 0;
      this.cartItemCount.next(this.totalCartItem);
    }

  }
  // end updateTotalCartItem

  //start getTotalCartItem
  getTotalCartItem(): Observable<any> {
    return this.cartItemCount.asObservable();
  }
  //end getTotalCartItem

  // start redirectToPage
  redirectToPage(destination) {
    switch (destination) {
      case 'cart':
        this.router.navigate(["/cart"]);
        break;
      case 'shipping':
        this.router.navigate(["/shipping"]);
        break;
      case 'success':
        this.router.navigate(["/success"]);
        break;
      default:
        this.router.navigate(["/"]);
    }
  }
  // end redirectToPage


  // start getListItems
  getListItems() {
    const apiUrl = 'https://www.mocky.io/v2/5eda4003330000740079ea60';
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      'Accept': 'application/json'
    });
    return this.httpclient.get(apiUrl, { headers });
  }
  // end getHotelOptions 



}

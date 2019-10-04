import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
selected_month: any;
  selected_year: any;

   years: string[] = ['2015', '2016', '2017'];
 months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

 selectedCard:any;

cardList= [{cardNumber: "2222 22** **** 2222", expireDate: "8/19", cardHolderName: "Benefit", balance: Array(1), instrumentID: "1826"},{cardNumber: "2222 22** **** 2222", expireDate: "8/19", cardHolderName: "Benefit 1", balance: Array(1), instrumentID: "1826"},
{cardNumber: "2222 22** **** 2222", expireDate: "8/19", cardHolderName: "Benefit 2", balance: Array(1), instrumentID: "1826"},
{cardNumber: "2222 22** **** 2222", expireDate: "8/19", cardHolderName: "Benefit 3", balance: Array(1), instrumentID: "1826"}]

constructor()
{
this.selected_month="Feb";

this.selectedCard={cardNumber: "2222 22** **** 2222", expireDate: "8/19", cardHolderName: "Benefit 1", balance: Array(1), instrumentID: "1826"}
}
}
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 selectedCard

cardList= [{cardNumber: "2222 22** **** 2222", expireDate: "8/19", cardHolderName: "Benefit", balance: Array(1), instrumentID: "1826"},{cardNumber: "2222 22** **** 2222", expireDate: "8/19", cardHolderName: "Benefit", balance: Array(1), instrumentID: "1826"},
{cardNumber: "2222 22** **** 2222", expireDate: "8/19", cardHolderName: "Benefit", balance: Array(1), instrumentID: "1826"},
{cardNumber: "2222 22** **** 2222", expireDate: "8/19", cardHolderName: "Benefit", balance: Array(1), instrumentID: "1826"}]

constructor()
{
}
}

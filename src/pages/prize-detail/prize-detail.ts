import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the PrizeDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-prize-detail',
  templateUrl: 'prize-detail.html'
})
export class PrizeDetailPage {

  prizeItemSelected:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.prizeItemSelected = this.navParams.get('prize');

  }

}

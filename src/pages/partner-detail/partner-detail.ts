import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the PartnerDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-partner-detail',
  templateUrl: 'partner-detail.html'
})
export class PartnerDetailPage {

  partnerItemSelected:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

      this.partnerItemSelected = this.navParams.get('partner');

  }




}

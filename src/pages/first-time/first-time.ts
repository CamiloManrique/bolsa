import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';


/*
  Generated class for the FirstTime page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-first-time',
  templateUrl: 'first-time.html'
})
export class FirstTimePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstTimePage');
  }

  onGoToLogin(){
    this.navCtrl.push(LoginPage);
  }


}

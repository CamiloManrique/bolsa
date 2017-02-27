import { Component } from '@angular/core';
import { NavController, NavParams, RefresherContent} from 'ionic-angular';
import {ServicePrizes} from '../../providers/service-prizes';
import {PrizeDetailPage} from '../prize-detail/prize-detail';

/*
  Generated class for the Prizes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.


  `<ion-grid>
  <ion-list>
  <div *ngFor= "let prize of prizes">
  <ion-item>
  <ion-row>
    <ion-col width-20> <img src='{{prize.prize_image}}'/> </ion-col>
    <ion-col width-80>
      
      <h6 style="margin-bottom: 0%;">{{prize.prize_nomb}}</h6>
      <p>{{prize.prize_desc}}</p>

    </ion-col>
  </ion-row> 
  </ion-item> 
  </div>
  </ion-list>
  </ion-grid>`

*/






@Component({
  selector: 'page-prizes',
  templateUrl: 'prizes.html',
  providers: [ServicePrizes]
})
export class PrizesPage {
   page: any;
   prizes: any;
   prize: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public prizesServices:ServicePrizes) {

    this.page = 20;
    this.doRefresh(0);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrizesPage');
  }


  itemTapped(event, prize) {

    let id = prize.prize_id;

    this.prizesServices.selectPrize(id).then(
        data =>{
        this.prize = data;

        this.navCtrl.push(PrizeDetailPage,{prize:this.prize});
      });

      
      

   
  }


  doRefresh(refresher){
      
      this.prizesServices.selectPrizes(this.page).then(

        data =>{
        this.prizes = data;
        if(refresher != 0){
          refresher.complete();
          this.page = this.page + 20;
        }

      });

    };

}

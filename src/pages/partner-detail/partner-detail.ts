import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import {ServicePrizes} from '../../providers/service-prizes';
/*
  Generated class for the PartnerDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-partner-detail',
  templateUrl: 'partner-detail.html',
  providers: [ServicePrizes]
})
export class PartnerDetailPage {

  page: any;
  prizes: Array<{prize_id: string, prize_nomb: string, prize_desc: string, prize_image: string, prize_points: string}>;
  prize: any;
  partnerItemSelected:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl:ToastController,public prizesServices:ServicePrizes) {

      this.partnerItemSelected = this.navParams.get('partner');
      this.page = 20;
      this.doRefresh();

  }


   errorToast() {
    let toast = this.toastCtrl.create({
      message: 'Error de conexión, por favor compruebe su conexión a internet.',
      duration: 3000
    });
    toast.present();
  }

  doRefresh(){
      
      this.prizes = this.prizesServices.selectPrizes();
      /*this.prizesServices.selectPrizes(this.page).then(

        data =>{
        this.prizes = data;
        if(refresher != 0){
          refresher.complete();
          this.page = this.page + 20;
        }

      }).catch(error=>{
        this.errorToast();
      });*/

    };



}

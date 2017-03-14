import { Component} from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import {ServicePartners} from '../../providers/service-partners';
import {PartnerDetailPage} from '../partner-detail/partner-detail';

/*
  Generated class for the Marks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-marks',
  templateUrl: 'marks.html',
  providers: [ServicePartners]
})
export class MarksPage{

  page: any;
  partners: any;
  partner: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public partnerServices:ServicePartners,public toastCtrl:ToastController) {  

    this.page = 10;
    this.doRefresh(0);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarksPage');
  }

  itemTapped(event, partner) {

    let id = partner.partner_id;

    this.partnerServices.selectPartner(id).then(
        data =>{
        this.partner = data;
        this.navCtrl.push(PartnerDetailPage,{partner:this.partner});
      }).catch(error=>{
        this.errorToast();
      });
   
  }

   errorToast() {
    let toast = this.toastCtrl.create({
      message: 'Error de conexión, por favor compruebe su conexión a internet.',
      duration: 3000
    });
    toast.present();
  }

  doRefresh(refresher){
      
      this.partnerServices.selectPartners(this.page).then(

        data =>{
        this.partners = data;
        if(refresher != 0){
          refresher.complete();
          this.page = this.page + 20;
        }

      }).catch(error=>{
        this.errorToast();
      });

    };


}

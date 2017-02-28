import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {La14Service} from '../../providers/la14api.service';
import {Sponsor} from "./sponsor";

/*
  Generated class for the Marks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-marks',
  templateUrl: 'marks.html'
})
export class MarksPage implements OnInit{

  constructor(public navCtrl: NavController, public navParams: NavParams, public la14: La14Service) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarksPage');
  }

  ngOnInit(){
    this.la14.getSponsors();
  }

}

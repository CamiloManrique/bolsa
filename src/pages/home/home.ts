import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {La14Service} from "../../providers/la14api.service";
import {OnInit} from "@angular/core";
import {PrizesPage} from '../prizes/prizes';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  constructor(public navCtrl: NavController, public navParams: NavParams, public la14: La14Service) {}

  onGoToPrizes(){
    this.navCtrl.push(PrizesPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ngOnInit(){
    this.la14.getUserData("Camilo");
  }




}

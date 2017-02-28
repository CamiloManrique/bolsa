/**
 * Created by Administrador on 27/02/2017.
 */
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {La14Service} from '../../providers/la14api.service';
import {Raffle} from "./raffle-item";

/*
 Generated class for the Marks page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-raffles',
    templateUrl: 'raffle.html'
})
export class RafflePage implements OnInit{

    constructor(public navCtrl: NavController, public navParams: NavParams, public la14: La14Service) {  }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Raffle');
    }

    ngOnInit(){
        this.la14.getRaffles();
    }

}

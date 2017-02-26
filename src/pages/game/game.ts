import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {GameService} from "../../services/gameservice";

/*
  Generated class for the Game page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
  providers: [GameService]
})
export class GamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private game: GameService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

}

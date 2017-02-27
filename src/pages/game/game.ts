import { NavController, NavParams } from 'ionic-angular';
import {Component, OnInit} from "@angular/core";
import {MainMenu} from "./main-menu";

/*
  Generated class for the Game page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage implements OnInit{

  state: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

  ngOnInit(){
    this.state = "MainMenu";
  }

  changeState(state:string): void{
    console.log(`Receiving state: ${state}`)
    this.state = state;
  }


}

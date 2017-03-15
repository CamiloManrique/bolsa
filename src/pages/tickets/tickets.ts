import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Ticket} from "./ticket-item";
import {La14Service} from "../../providers/la14api.service";

/*
  Generated class for the Tickets page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html'
})
export class TicketsPage {

  tickets: Ticket[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public la14: La14Service) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketsPage');
    this.la14.getTickets().then(response => {
      this.tickets = this.la14.tickets;
      console.log(this.tickets);
    });
  }

}

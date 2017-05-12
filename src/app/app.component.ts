import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';
import { LoginPage } from '../pages/login/login';
import { FirstTimePage } from '../pages/first-time/first-time';
import { RafflePage } from '../pages/raffle/raffle';
import { AccountPage } from '../pages/account/account';
import { TicketsPage } from '../pages/tickets/tickets';
import { GamePage } from '../pages/game/game';
import { MarksPage } from '../pages/marks/marks';
import { PrizesPage } from '../pages/prizes/prizes';
import { BagPage } from '../pages/bag/bag';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make LoginPage the root (or first) page
  rootPage: any = FirstTimePage;
  pages: Array<{title: string, component: any,imagen:string}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    
    this.initializeApp();
    this.pages = [
      { title: 'Sorteos', component: RafflePage, imagen: 'img/icons/1.png' },
      { title: 'Mi Cuenta', component: AccountPage, imagen: 'img/icons/2.png' },
      { title: 'Boletas', component: TicketsPage,  imagen: 'img/icons/3.png' },
      { title: 'Jugar', component: GamePage,  imagen: 'img/icons/4.png' },
      { title: 'Patrocinadores', component: MarksPage, imagen: 'img/icons/5.png' },
      { title: 'Premios', component: PrizesPage, imagen: 'img/icons/6.png' },
      { title: 'La Bolsa', component: BagPage,  imagen: 'img/icons/7.png'}
    ];

    // set our app's pages

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.backgroundColorByName("primary-green");
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
   
      this.nav.push(page.component);
  

    
  }
}

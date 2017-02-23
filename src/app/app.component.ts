import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { HomePage } from '../pages/home/home';
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

  // make HelloIonicPage the root (or first) page
  rootPage: any = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Sorteos', component: RafflePage },
      { title: 'Opciones', component: AccountPage },
      { title: 'Boletas', component: TicketsPage },
      { title: 'Jugar', component: GamePage },
      { title: 'Marcas Patrocinadoras', component: MarksPage },
      { title: 'Premios', component: PrizesPage },
      { title: 'La Bolsa', component: BagPage},
      { title: 'Cerrar Sesión', component: HelloIonicPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
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

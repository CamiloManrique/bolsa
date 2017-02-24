import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage, LoginForm } from '../pages/login/login';
import { BienvenidaPage } from '../pages/bienvenida/bienvenida';
import { HomePage } from '../pages/home/home';
import { RafflePage } from '../pages/raffle/raffle';
import { AccountPage } from '../pages/account/account';
import { TicketsPage } from '../pages/tickets/tickets';
import { GamePage } from '../pages/game/game';
import { MarksPage } from '../pages/marks/marks';
import { PrizesPage } from '../pages/prizes/prizes';
import { BagPage } from '../pages/bag/bag';
import {Points} from "../pages/home/puntos";
import {Sponsor, SponsorDiv} from "../pages/marks/sponsor";
import {La14Service} from "../services/la14api.service";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    LoginForm,
    Points,
    BienvenidaPage,
    HomePage,
    RafflePage,
    AccountPage,
    TicketsPage,
    GamePage,
    MarksPage, SponsorDiv,
    PrizesPage,
    BagPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    BienvenidaPage,
    HomePage,
    RafflePage,
    AccountPage,
    TicketsPage,
    GamePage,
    MarksPage,
    PrizesPage,
    BagPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: La14Service, useClass: La14Service}
  ]
})
export class AppModule {}

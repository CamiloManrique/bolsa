import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage, LoginForm } from '../pages/hello-ionic/hello-ionic';
import { BienvenidaPage } from '../pages/bienvenida/bienvenida';
import { HomePage } from '../pages/home/home';
import { RafflePage } from '../pages/raffle/raffle';
import { AccountPage } from '../pages/account/account';
import { TicketsPage } from '../pages/tickets/tickets';
import { GamePage } from '../pages/game/game';
import { MarksPage } from '../pages/marks/marks';
import { PrizesPage } from '../pages/prizes/prizes';
import { BagPage } from '../pages/bag/bag';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage, 
    LoginForm,
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
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
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
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

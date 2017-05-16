import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServicePrizes provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ServicePrizes {
  premios: Array<{prize_id: string, prize_nomb: string, prize_desc: string, prize_image: string, prize_points: string}>;

  constructor(public http: Http) {
    //console.log('Hello ServicePrizes Provider');
    this.premios = null;
  }




  selectPrizes(){

    this.premios = [
      { prize_id: '1', prize_nomb:'Lavadora', prize_desc: 'Lavadora automatica que puede secar la ropa',prize_image: 'img/lavadora-lg-9kg-19lb-inox-carga-superior-wf-t7005tp-01.jpg', prize_points: '11'},
      { prize_id: '2', prize_nomb:'Nevera', prize_desc: 'Nevera para congelar',prize_image: 'img/nevera.jpeg', prize_points: '22'},
      { prize_id: '3', prize_nomb:'Estufa', prize_desc: 'Estufa para cocinar',prize_image: 'img/mabe_estufa_76cm_silver_ma07630ci0_frente.jpg', prize_points: '4'},
      { prize_id: '4', prize_nomb:'Equipo de Sonido', prize_desc: 'Equipo de sonido para sonidos',prize_image: 'img/EQUIPO%20DE%20SONIDO.jpg', prize_points: '30'},
      { prize_id: '5', prize_nomb:'Teatro en Casa', prize_desc: 'Teatro en cas para peliculas',prize_image: 'img/large01.jpg', prize_points: '2'},
      { prize_id: '6', prize_nomb:'DVD LG', prize_desc: 'DVD Para Pelis',prize_image: 'img/reproductor-DVD-DP132-450x370-4.jpg', prize_points: '11'}
    ];

    return this.premios;

  }




  /*selectPrizes(page:any){

    this.data = null;

    return new Promise((resolve, reject) =>{


      let myHeader = new Headers({
        //"Access-Control-Allow-Methods": "GET, OPTIONS",
        //"Access-Control-Allow-Headers": "Content-Type, Content-Length, Accept-Encoding",
        "Content-Type":"text/html; charset=UTF-8"
      });

      let options = new RequestOptions({
          headers: myHeader
      });

      this.http.get('http://pruebas.emefectivas.com/aplicacion/index.php/Prizes/getAll/'+page,options)
      .map(res => res.json())
      .subscribe(data => {

          this.data = data;
          resolve(this.data);

      },
      error => {reject(error)}
      );

    });



  }*/





    /*selectPrize(id:any){

    this.data = null;

    return new Promise((resolve, reject) =>{

      let myHeader = new Headers({
        "Content-Type":"text/html; charset=UTF-8"
      });

      let options = new RequestOptions({
          headers: myHeader
      });

      this.http.get('http://pruebas.emefectivas.com/aplicacion/index.php/Prizes/getPrize/'+id,options)
      .map(res => res.json())
      .subscribe(data => {

          this.data = data;
          resolve(this.data);

      },
      error => {reject(error)}
      );

    });



    }*/




}
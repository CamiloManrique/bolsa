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
  data: any

  constructor(public http: Http) {
    //console.log('Hello ServicePrizes Provider');
    this.data = null;
  }



  selectPrizes(){

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

      this.http.get('http://localhost/aplicacion/index.php/Prizes/getAll',options)
      .map(res => res.json())
      .subscribe(data => {

          this.data = data;
          resolve(this.data);

      },
      error => {reject(error)}
      );

    });



  }



}

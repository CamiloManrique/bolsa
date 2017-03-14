import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServicePartners provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ServicePartners {

  data:any

  constructor(public http: Http) {
    //console.log('Hello ServicePartners Provider');
    this.data = null;
  }

  selectPartners(page:any){

    this.data = null;

    return new Promise((resolve, reject) =>{


      let myHeader = new Headers({
        "Content-Type":"text/html; charset=UTF-8"
      });

      let options = new RequestOptions({
          headers: myHeader
      });

      this.http.get('http://localhost/aplicacion/index.php/Partners/getAll/'+page,options)
      .map(res => res.json())
      .subscribe(data => {

          this.data = data;
          resolve(this.data);

      },
      error => {reject(error)}
      );

    });



  }


    selectPartner(id:any){

    this.data = null;

    return new Promise((resolve, reject) =>{

      let myHeader = new Headers({
        "Content-Type":"text/html; charset=UTF-8"
      });

      let options = new RequestOptions({
          headers: myHeader
      });

      this.http.get('http://localhost/aplicacion/index.php/Partners/getPartner/'+id,options)
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

import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ServiceUsers {

  data:any;

  constructor(public http: Http) {
    this.data = null;
  }

  verifyUsers(value: any){

    return new Promise((resolve, reject) =>{


      let myHeader = new Headers({
        //"Access-Control-Allow-Methods": "GET, OPTIONS",
        //"Access-Control-Allow-Headers": "Content-Type, Content-Length, Accept-Encoding",
        "Content-Type":"text/html; charset=UTF-8"
      });

      let options = new RequestOptions({
          headers: myHeader
      });

      this.http.get('http://localhost/aplicacion/index.php/Data/verificar/'+value,options)
      .map(res => res.json())
      .subscribe(data => {

          this.data = data;
          resolve(this.data);

      },
      error => {reject(error)}
      );

    });


  }

  updateUserStatus(numDocument:any){

    return new Promise(resolve =>{

      this.http.get('http://localhost/aplicacion/index.php/Data/actualizar/0/'+numDocument)
      .map(res => res.json())
      .subscribe(data => {

          this.data = data;
          resolve(this.data);

      }
      );

    });


  }


 



}

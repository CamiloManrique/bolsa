/**
 * Created by Administrador on 22/02/2017.
 */
import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Online, Users, Sponsors} from "./fakebackend";
import {Sponsor} from "../pages/marks/sponsor";

//Modificar por las variables reales
export var BASE_URL = "http://jsonplaceholder.typicode.com";
export var USER_ENDPOINT = "/posts/1";

@Injectable()
export class La14Service{
    constructor(
        private http: Http
    ){  }

    getUserData(user: string): Promise<any>{

        // Fake Request (for testing purposes)

        if(!Online){
            return Promise.reject("El servicio no está disponible");
        }

        for(let object of Users){
            if(user == user) {
                return Promise.resolve(object);
            }
        }
        return Promise.resolve({});





        // Real Http Request
        /*
        return new Promise((resolve, reject) => {
            this.http.request(`${BASE_URL}${USER_ENDPOINT}`)
            .subscribe((res: Response) => {
                resolve(res.json());
            },
            error => reject(null))
        })
        */
    }


    getUserPoints(user: string): Promise<string> {
        return new Promise((resolve, reject) => {
            this.getUserData(user).then((userdata: any) => {
                resolve(userdata.puntos); //Reemplazar por el miembro apropiado de puntos
            }).catch((error: any) => {
                reject(error);
            })
        })
    }

    updateUserPoints(points) : Promise<any> {

        //Test code
        return Promise.resolve(true);

        //Production code

        /*

         */
    }

    getSponsors(): Promise<Sponsor[]>{
        if(!Online){
            return Promise.reject("El servicio no está disponible");
        }

        return Promise.resolve(Sponsors)

        // Real Http Request
        /*
         return new Promise((resolve, reject) => {
         this.http.request(`${BASE_URL}${USER_ENDPOINT}`)
         .subscribe((res: Response) => {
         resolve(res.json());
         },
         error => reject(null))
         })
         */

    }

    getPrizes(): Promise<any> { return Promise.resolve(true)  }

    getRaffles(): Promise<any> { return Promise.resolve(true) }
}
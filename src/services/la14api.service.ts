/**
 * Created by Administrador on 22/02/2017.
 */
import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Online, Users} from "./fakebackend";

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
                resolve(userdata.body); //Reemplazar por el miembro apropiado de puntos
            }).catch((error: any) => {
                reject(error);
            })
        })
    }


    updateUserPoints() : void {
        console.log("Puntos actualizados");
    }
}
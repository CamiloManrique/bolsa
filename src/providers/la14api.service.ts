/**
 * Created by Administrador on 22/02/2017.
 */
import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Online, Users, Sponsors, Raffles} from "./fakebackend";
import {Sponsor, sponsorGenerator} from "../pages/marks/sponsor";
import {Raffle, raffleGenerator} from "../pages/raffle/raffle-item";


//Modificar por las variables reales
export var BASE_URL = "http://jsonplaceholder.typicode.com";
export var USER_ENDPOINT = "/posts/1";

function userdataGenerator(object: any): Userdata{
    return new Userdata(object.user, object.documento, object.puntos);
}

export class Userdata{
    constructor(public name:string ="", public cc:string = "", public points:number = 0) {}
}

@Injectable()
export class La14Service{

    userdata: Userdata;
    sponsors: Sponsor[];
    raffles: Raffle[];

    constructor(
        private http: Http
    ){
        this.userdata = new Userdata();
        this.sponsors = [];
    }

    getUserData(user: string): void{

        // Fake Request (for testing purposes)
        if(!Online){
            console.log("Error de conexión");
        }

        for(let object of Users){
            if(user == object.user) {
                console.log(object);
                this.userdata = userdataGenerator(object);
                console.log(this.userdata);

            }
        }

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

    getUserPoints(): number {
        return this.userdata.points;
    }

    updateUserPoints(points) : Promise<any> {

        //Test code
        return Promise.resolve(true);

        //Production code

        /*

         */
    }

    getSponsors(): void{
        if(!Online){
            console.log("El servicio no está disponible");
        }

        let tmp_sponsors: Sponsor[] = [];
        for(let s of Sponsors){
            tmp_sponsors.push(sponsorGenerator(s));
        }

        this.sponsors = tmp_sponsors;



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

    getRaffles(): void {

        if(!Online){
            console.log("El servicio no está disponible");
        }

        let tmp_raffles: Raffle[] = [];
        for(let r of Raffles){
            tmp_raffles.push(raffleGenerator(r));
        }


        this.raffles = tmp_raffles;
        console.log(this.raffles);

    }
}
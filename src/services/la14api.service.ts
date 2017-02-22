/**
 * Created by Administrador on 22/02/2017.
 */
import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";



@Injectable()
export class La14Service{

    constructor(private http: Http){ }


    getUserData(user: string): Promise<any>{
        return new Promise((resolve, reject) => {
            this.http.request("http://jsonplaceholder.typicode.com/posts/1")
            .subscribe((res: Response) => {
                resolve(res.json());
            })
        })
    }


    getUserPoints(user: string): Promise<string> {
        return new Promise((resolve, reject) => {
            this.getUserData(user).then((userdata: any) => {
                resolve(userdata.body);
            })
        })
    }


    updateUserPoints() : void {
        console.log("Puntos actualizados");
    }
}
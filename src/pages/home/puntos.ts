/**
 * Created by Administrador on 23/02/2017.
 */
import {Component, OnInit} from "@angular/core";
import {La14Service} from '../../services/la14api.service';

export class PointsController implements OnInit{
    points: number;
    la14service: La14Service

    constructor(la14service: La14Service){
        this.la14service = la14service;
    }

    ngOnInit(){
        this.la14service.getUserPoints("Camilo").then(points => {
            this.points = +points;
        });
    }

    updatePoints(points: number):void{
        this.la14service.updateUserPoints(points).then(res => {
            if(res){
                this.points+=points;
            }
        })

    }
}

@Component({
    selector: "points",
    template:
        `
        <div>Tienes {{points}} puntos</div>
        `,
    providers:[La14Service]
})
export class Points extends PointsController{
    constructor(la14service: La14Service){
        super(la14service);
    }
}


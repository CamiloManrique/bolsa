/**
 * Created by Administrador on 23/02/2017.
 */
import {Component, OnInit} from "@angular/core";
import {La14Service} from '../../services/la14api.service';


@Component({
    selector: "points",
    template:
        `
        <div>Tienes {{points}} puntos</div>
        `,
    providers:[La14Service]
})
export class Points implements OnInit{
    points: number;

    constructor(private la14service: La14Service){
    }

    ngOnInit(){
        this.la14service.getUserPoints("Camilo").then(points => {
            this.points = +points;
        });
    }

}


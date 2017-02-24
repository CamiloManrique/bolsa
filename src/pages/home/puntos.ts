/**
 * Created by Administrador on 23/02/2017.
 */
import {Component} from "@angular/core";
import {La14Service} from '../../services/la14api.service';

export class PointsController{
    points: number;
    la14: La14Service;

    constructor(la14: La14Service){
        this.la14 = la14;
    }

    updatePoints(points: number):void{
        this.la14.updateUserPoints(points).then(res => {
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
        <div>{{la14.getUserPoints()}}</div>
        `
})
export class Points extends PointsController{
    constructor(la14: La14Service){
        super(la14);
    }
}
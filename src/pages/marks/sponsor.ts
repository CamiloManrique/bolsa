/**
 * Created by Administrador on 24/02/2017.
 */
import {Component} from '@angular/core';

export class Sponsor{
    constructor(public name:string, public imgUrl:string){ }
}


@Component({
    selector:"sponsor-div",
    inputs:["sponsor"],
    template:`
    <div>
        <img [src]="sponsor.imgUrl">
        <p>{{sponsor.name}}</p>
    </div>
    `
})
export class SponsorDiv{
    sponsor: Sponsor;
}
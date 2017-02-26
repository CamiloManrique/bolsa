/**
 * Created by Administrador on 24/02/2017.
 */
import {Component} from '@angular/core';

export function sponsorGenerator(object: any): Sponsor{
    return new Sponsor(object.name, object.imgUrl);
}

export class Sponsor{
    constructor(public name:string, public imgUrl:string){ }
}


@Component({
    selector:"sponsor-component",
    inputs:["sponsor"],
    template:`
    <div>
        <img [src]="sponsor.imgUrl">
        <p>{{sponsor.name}}</p>
    </div>
    `
})
export class SponsorComponent{
    sponsor: Sponsor;
}
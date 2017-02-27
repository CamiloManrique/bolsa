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
    <div class="sponsor">
        <img [src]="sponsor.imgUrl">
        <h6 class="sponsor-label">{{sponsor.name}}</h6>
    </div>
    `
})
export class SponsorComponent{
    sponsor: Sponsor;
}
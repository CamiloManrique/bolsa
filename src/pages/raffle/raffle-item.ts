/**
 * Created by Administrador on 27/02/2017.
 */
import {Component} from "@angular/core";
import {stringToDate} from "../../providers/globalutils"

export function raffleGenerator(object: any): Raffle{
    let time: Date = stringToDate(object.time, "yyyy-MM-dd", "-");
    let winners = object.winners;

    let winner_array = [];

    for(let winner of winners){
        winner_array.push(new Winner(winner.name, winner.prize));
    }

    return new Raffle(time, winner_array);

}

@Component({
    selector:"raffle-item",
    inputs:["raffle"],
    template: `
        <h6>{{raffle.time}}</h6>
        <p *ngFor="let winner of raffle.winners">{{winner.name}} : {{winner.prize}}</p>
    `
})
export class RaffleComponent{
    raffle: Raffle;
}

export class Raffle{
    time: Date;
    winners:Winner[];

    constructor(time:Date, winners:Winner[]){
        this.time = time;
        this.winners = winners;
    }
}

export class Winner{
    name: string;
    prize: string;

    constructor(name:string, prize: string){
        this.name = name;
        this.prize = prize;
    }
}
/**
 * Created by Administrador on 14/03/2017.
 */
import {Component} from "@angular/core";
import {TimeInterval} from "../../../node_modules/rxjs/operator/timeInterval";

export function ticketGenerator(object: any):Ticket{
    return new Ticket(object.number, object.valid);
}

@Component({
    selector:"ticket-component",
    inputs:["ticket"],
    template:`
    <ion-row>
        <ion-col width-20>
            <img src="img/tickets/ticket.png">
        </ion-col>
        <ion-col width-80>
            <p><span>Boleta No. {{ticket.ticket_number}}</span><br>
                Valido para sorteos del mes de {{ticket.valid}}
            </p>
        </ion-col>
    </ion-row>
    `
})
export class TicketComponent{

    public ticket: Ticket;

}

export class Ticket{
    ticket_number: number;
    valid: string;

    constructor(ticket_number:number, valid:string){
        this.ticket_number = ticket_number;
        this.valid = valid;

    }

}

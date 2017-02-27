/**
 * Created by Casa on 26/2/2017.
 */
import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector:"main-menu",
    inputs: ["state"],
    template:`
        <h1 padding>Menú Principal</h1>

        <button ion-button block outline (click)="changeState('Game')">Iniciar</button>
        <button ion-button block outline>Instrucciones</button>
        <button ion-button block outline>Puntajes</button>
        <button ion-button block outline>Salir</button>
    `
})
export class MainMenu{
    state: string;

    @Output() stateEmitter: EventEmitter<string> = new EventEmitter<string>();

    changeState(state: string) {
        this.stateEmitter.emit(state);
        console.log(`Emitting state: ${state}`);
    }
}

/**
 * Created by Casa on 26/2/2017.
 */
import {Component, OnInit} from "@angular/core";
import {GameService} from "../../services/gameservice";
import {Question} from "./questions";

@Component({
    selector: "game",
    inputs:["state"],
    template: `
        <h1>Aquí va el juego</h1>
    `,
    providers: [GameService]
})
export class GameContent implements OnInit{

    state: string;
    questions:Question[];

    constructor(private game: GameService){}

    ngOnInit(){
        this.game.getQuestions();
        console.log(this.game.questions);
    }
}
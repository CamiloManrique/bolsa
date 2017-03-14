/**
 * Created by Casa on 26/2/2017.
 */
import {Component, OnInit, ViewChild, EventEmitter} from "@angular/core";
import {GameService} from "../../providers/gameservice";
import {Question} from "./question";
import {Timer} from "./timer";

@Component({
    selector: "game",
    inputs:["state"],
    outputs:["stateEmitter"],
    template:`

    <div *ngIf="!finished">
        <ion-row>
            <ion-col col-3><timer (timeUp)="processQuestion($event)" [total_time]=10></timer></ion-col>
            <ion-col col-3>{{actual_question}}/5</ion-col>
            <ion-col col-3>Puntos: {{points}}</ion-col>
        </ion-row>

        <ion-row>
            <ion-col col-12><question-component (answerEmitter)="processQuestion($event)" [question]="questions[actual_question-1]"></question-component></ion-col>
        </ion-row>
    </div>

    <div *ngIf="finished">
        <p>Has logrado {{points}} puntos</p>
        <button ion-button (click)="returnMainMenu()">Volver al menú principal</button>
    </div>



    `,
    providers: [GameService]
})
export class GameContent{


    @ViewChild(Timer)
    private timer: Timer;

    stateEmitter: EventEmitter<string>;

    finished: boolean;
    points: number;
    state: string;
    actual_question: number;
    actual_time: number;
    questions:Question[];

    constructor(private game: GameService){
        this.finished = false;
        this.stateEmitter = new EventEmitter<string>();
        this.points = 0;
        this.actual_time = 0;
        this.actual_question = 1;
        this.questions = this.game.getQuestions();
        console.log(this.questions);
    }

    processQuestion(event: string){
        console.log("process");
        switch (event){
            case "time up":
                break;
            case "wrong":
                break;
            case "correct":
                this.points += 10;
        }
        this.nextQuestion();
    }

    nextQuestion(){
        this.timer.resetTimer();
        this.actual_question += 1;
        if(this.actual_question>3){
            this.finishGame();
        }
    }

    finishGame(){
        this.finished = true;
    }

    returnMainMenu(){
        this.stateEmitter.emit("MainMenu");
    }
}
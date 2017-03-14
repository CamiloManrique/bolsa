/**
 * Created by Casa on 25/2/2017.
 */
import {Component, EventEmitter} from "@angular/core";

export class Question{

    constructor(public question:string,
                public options:string[],
                public correct:number
    ){ }
}

@Component({
    selector: "question-component",
    inputs:["question"],
    outputs:["answerEmitter"],
    template:`

    <h1 class="center">{{question.question}}</h1>

    <ion-row padding></ion-row>

    <ion-row *ngFor="let option of question.options; let i = index">
        <ion-col col-12>
            <button (click)="checkAnswer(i)" ><span class="option-label">{{resolveNumber(i)}} )</span><span class="option-text">{{option}} </span></button>
        </ion-col>
    </ion-row>


    `
})
export class QuestionComponent{
    public question: Question;
    public answerEmitter: EventEmitter<string>;

    constructor(){
        this.answerEmitter = new EventEmitter<string>();
    }

    checkAnswer(option:number){
        console.log(option);
        console.log(this.question.correct);
        if(option == this.question.correct){
            this.answerEmitter.emit("correct");
        }
        else{
            this.answerEmitter.emit("wrong");
        }
    }

    resolveNumber(number){
        switch (number){
            case 0:
                return "A";
            case 1:
                return "B";
            case 2:
                return "C";
            case 3:
                return "D";
        }
    }

}


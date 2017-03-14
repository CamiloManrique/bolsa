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
        <ion-card>
            <p>{{question.question}}</p>
            <ion-list>
                <ion-item (click)="checkAnswer(i)" *ngFor="let option of question.options; let i = index">{{option}}</ion-item>
            </ion-list>
        </ion-card>
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

}


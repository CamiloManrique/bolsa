/**
 * Created by Casa on 25/2/2017.
 */
import {Component} from "@angular/core";

export class Question{

    constructor(public question:string,
                public options:string[],
                public correct:number
    ){ }
}

@Component({
    selector: "question-component",
    inputs:["question"],
    template:`
        <ion-card>
            <p>{{question.question}}</p>
            <ion-list>
                <ion-item *ngFor="let option of question.options">{{option}}</ion-item>
            </ion-list>
        </ion-card>
    `
})
export class QuestionComponent{
    question: Question;
}


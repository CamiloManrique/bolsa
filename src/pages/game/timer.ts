import {OnInit, Component, EventEmitter} from "@angular/core";
import {Observable} from 'rxjs/Rx';

/**
 * Created by Administrador on 14/03/2017.
 */

@Component({
    selector: "timer",
    inputs:["total_time"],
    outputs:["timeUp"],
    template:`
        <ion-row>
            <ion-col col-12>
                <h1>Tiempo</h1>
                <ion-col col-12>
                <div class="outer">
                    <div class="inner" [style.width]="100 - 100*(ticks/total_time)+'%'"></div>
                </div>
            </ion-col>
            </ion-col>

        </ion-row>



    `
})
export class Timer implements OnInit{

    public ticks: number;
    public total_time: number;
    public timeUp: EventEmitter<string>;

    constructor(){
        this.timeUp = new EventEmitter<string>();
        this.ticks = 0;
    };

    ngOnInit(){
        let timer = Observable.timer(0,1000);
        timer.subscribe(t=>{
            this.ticks += 1;
            if (this.ticks >= this.total_time){
                console.log(this.ticks);
                this.timeUp.emit("time up");
            }
        });
    }

    resetTimer(){
        this.ticks = 0;
    }

}


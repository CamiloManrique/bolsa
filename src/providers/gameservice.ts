/**
 * Created by Casa on 25/2/2017.
 */
import {Injectable} from "@angular/core";
import {Questions} from "./fakebackend";
import {Question} from "../pages/game/question";

@Injectable()
export class GameService{


    getQuestions(){
        return Questions;
    }

}
import {Question} from "../pages/game/questions";
/**
 * Created by Administrador on 23/02/2017.
 */

export const Online: boolean = true;
export const Users: any[] = [
    {user: "Camilo", documento: "1.144.054.421", puntos: 20},
    {user: "Juan David", documento: "1.057.478.211", puntos: 50},
    {user: "Jorge", documento: "1.871.214.781", puntos: 10},
];

export const Sponsors: any[] = [
    {name: "Bavaria", imgUrl: "img/logo-bavaria.jpg"},
    {name: "Kool Aid", imgUrl:"img/koolaid.png"}
];

export const Questions: Question[] = [
    new Question(
        "¿Cuanto es 2 + 2 ?",
        ["1", "3", "4", "10"],
        3
    ),
    new Question(
        "¿Quien es el más vagal de EME?",
        ["Camilo", "Juanito", "Juan David", "David"],
        2
    ),
    new Question(
        "¿Se entregará la app de la 14 a tiempo?",
        ["Si", "No", "Tal vez", "Ninguna de las anteriores"],
        4
    )
];

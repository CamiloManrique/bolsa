import {Question} from "../pages/game/question";
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

export const Raffles: any[] = [
    {time:"2017-02-02", winners:[
        {name:"Camilo", prize:"Moto eléctrica"},
        {name:"Juan David", prize:"Carro eléctrico"},
        {name: "Jorge", prize: "Bicicleta"}
    ]},
    {time:"2017-02-15", winners:[
        {name:"Carlos", prize:"Carro eléctrico"},
        {name:"Andrés", prize:"Lavadora"},
        {name: "Mario", prize: "DVD"}
    ]}
];

export const Tickets: any[] = [
    {number:"23894566", "valid":"Abril"},
    {number:"23892133", "valid":"Julio"},
    {number:"31324566", "valid":"Noviembre"},
];

export const Questions: Question[] = [
    new Question(
        "¿A qué se le llama \"No potable\"?",
        ["A una parte de África", "Al agua que no es apta para el consumo humano", "A un animal peligroso"],
        1
    ),
    new Question(
        "¿Qué es el reciclaje?",
        ["La reutilización de ciertos materiales", "Un sistema de almacenamiento", "La explotación de arrecifes"],
        0
    ),
    new Question(
        "Un ejemplo de recurso renovable es:",
        ["El petróleo", "El agua", "Ninguna de las anteriores"],
        1
    )
];

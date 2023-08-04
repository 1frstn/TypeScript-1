let myName:string;

//myName= 4; false

myName = "Kerem"

let album:any;

album = 23;
album=true;
album="first";

const sum = (a:number,b:string) => {
    return a+b
} 

let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;

/*  .............array ...................*/

let strindArr = ['one','hey','Kerem'];

let guitars = ['Start','Les Paul', 45];

let mixData = ['ec',43,true];

strindArr.push(45)

guitars[0] = 123;
guitars.unshift('dsa')

strindArr = guitars // not true

guitars = strindArr // true

mixData = guitars // true

let test = []
let bands: string[] = []
bands.push("jer")

// Tuple
let myTuple: [string,number,boolean] = [21,"432","Das"]
let mixed = ["john",23,false]

myTuple = mixed // false
mixed = myTuple // true

myTuple[1] = 42


// Object
let myObj: object;

myObj = []
console.log(typeof myObj);
myObj = bands
myObj = {}

const exampleObj = {
    prop1: "Kerem",
    prop2: true
}
exampleObj.prop2 = 45

////////////////kkkkkkkkkkk

type Guitarist = {
    name: string,
    active?: boolean,
    albums: (string|number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: ['sunshine',1958]
}
let jp: Guitarist = {
    name: 'Jimy',
    active: true,
    albums: ['sun',"ash"]
}
let jsa: Guitarist = {
    name: 'Jimy',
    albums: ['sun',"ash"]
}


const greetGuitars = (guitarist:Guitarist) => {
    return `Hello ${guitarist.name}`
}

console.log(greetGuitars(jsa));


// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to
// JavaScript but something added to the language and runtime."

enum Grade {
    U,
    D,
    C,
    B,
    A
}

console.log(Grade.U) ; // => 0
enum Grade {
    Z = 1,
    X,
    F,
    G,
    H
}

console.log(Grade.Z) ; // => 1

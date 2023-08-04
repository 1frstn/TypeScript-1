// Type Aliases

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[]

type Guitarist_f = {
    name?: string,
    active: boolean,
    albums: (string|number)
}

type UserId = stringOrNumber;

// Literal types
 
let myName_f: "Kerem";

let userName: "Kerem" | 'Dave' | 'John';

userName = "Kerem" 


// functions

const add = (a:number,b:number):number => {
    return a+b
}

const logMsg = (message:any): void => {
    console.log(message);
}

let subtract = function (c:number , d:number):
number {
    return c-d
}

// type mathFunction = (a:number,b:number) => number
interface mathFunction {(a:number,b:number): number}

let multiply : mathFunction = function(c,d){
    return c*d
}


// optinal parameters 
const addAll = (a:number , b:number , c?:number):
number => {
    if(typeof c !== 'undefined'){
        return a + b + c
    }
    return a+b
}


const sumAll = (a:number , b:number , c:number = 2):
number => {
    return a + b + c
}


// Rest Parameters 

const total = (...nums:number[]): number =>{
    return nums.reduce((prev,curr) => prev + curr)
} 

logMsg(total(1,2,3,4)) // => 10

// never
const creatError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i = 1 
    while (true){
        i++
    }
}

const infinite_void = () => {
    let i =2 ;
    while(true){
        i++
        if(i>100) break
    }
}

// custom type guard
const isNumber = (value:any): boolean => {
    return typeof value === 'number'
      ? true : false
}

// use of the never type
const numberOrString = (value:number | string):string =>{
    if(typeof value === 'string') return 'string'
    if(typeof value === 'number' ) return 'number'
    return creatError("this should never happen !")
}

/*........ Assertions ..........*/

type One = string;
type Two = string | number;
type Three = 'hello';

// convert  to more or less specific

let a: One = 'hello';

let b = a as Two // less specific

let c = a as Three // more specific

let d = <One>'world';

let e = <string | number>'world'

const addOrCancat = (a: number, b: number, c: 'add' | 'concat'):number|
string => {
    if(c === 'add') return a + b
    return '' + a + b
}

let myVal: string = addOrCancat(2,2,'concat') as string

//Be careful TS sees no problem - but a string is returned
let nextVal: number = addOrCancat(2,2,'concat') as number

10 as string
(10 as unknown) as string;


// The DOM 

const img = document.querySelector('img') as HTMLImageElement
const myImg = document.getElementById('#img') as HTMLImageElement

/* aaaaaaaaaaaaa */

// Original JS code 
/* const year = document.getElementById('year')
const thisYear = new Date().getFullYear();

year.setAttribute("datetime",thisYear)
year?.textContent = thisYear
 */

//1st variant

/* let year: HTMLElement|null = document.getElementById('year')
let thisYear: string = new Date().getFullYear().toString();

if(year){
    year.setAttribute("datetime",thisYear)
    year.textContent = thisYear
} */

//1st variant

const  year = document.getElementById('year') as HTMLSpanElement
let thisYear: string = new Date().getFullYear().toString();

year.setAttribute("datetime",thisYear)
year.textContent = thisYear


/*.......... classes ...........*/

class Coder{
   constructor(
        public readonly name: string,
        public music:string,
        private age:number,
        protected lang:string = 'TypeScript'
    ){
        this.name = name
        this.music = music
        this.age=age
        this.lang = lang 
    } 
    public getAge(){
        return `Hello I'm ${this.age}`
    }
}

const Kerem = new Coder('Kerem','classic',28,'Kurdish')
console.log(Kerem.getAge());
console.log(Kerem.age);
console.log(Kerem.lang);


class WebDev extends Coder {
    constructor(
        public computer: string,
        name:string,
        music:string,
        age:number, 
    ){
      super(name,music,age)  
      this.computer = computer
    }
    public getLang(){
        return `I write ${this.lang}`
    }
    
}

const Sara = new WebDev('Mac','Sara','lofi',25) 

console.log(Sara.getLang());
console.log(Sara.age);
console.log(Sara.lang);



/* implementing interface in classs */

interface Musician {
    name: string,
    instrument: string,
    play(action:string): string
}

class Guitarsit_C implements Musician {
    name: string
    instrument: string

    constructor(name:string , instrument:string){
        this.name=name
        this.instrument=instrument
    }
    play(action: string){
        return `${this.name} ${action} the ${this.instrument}`
    }
}


const Page = new Guitarsit_C('Jmeyy','guitar')
console.log(Page.play('strums')); // => Jmeyy strumd the guitar


////////////

class Peeps{
    static count: number = 0
    static getCount(): number{
        return Peeps.count
    }

    public id: number

    constructor(public name: string){
        this.name=name
        this.id= ++Peeps.count
    }
}

const Can = new Peeps('Can')
const Ali = new Peeps('Ali')
const Veli = new Peeps('Veli')

console.log(Peeps.count); // => 3
console.log(Can.id); // => 1
console.log(Veli.id); // => 3

////////////////////////

class Bands{
    private dataState: string[]

    constructor(){
        this.dataState = []
    }
    public get data():string[]{
        return this.dataState
    }

    public set data(value: string[]){
        if(Array.isArray(value) && value.every(el => 
            typeof el === 'string')){
                this.dataState = value
                return 
            } else throw new Error('Param is not an array of string')
    }
}

const MyBands = new Bands()
MyBands.data = ['Neil Young', 'Led Zep']
console.log(MyBands.data); // => ['Neil Young', 'Led Zep']
MyBands.data = [...MyBands.data, 'ZZ Top']
console.log(MyBands.data); // => ['Neil Young', 'Led Zep','ZZ Top']


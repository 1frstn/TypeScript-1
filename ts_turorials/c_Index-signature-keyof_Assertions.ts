// index signature

/* interface TransactionObj_i {
    readonly [index: string]: number
} */

interface TransactionObj_i{
    readonly [index: string]: number
    Pizza: number,
    Books: number,
    Job: number
}

const todaysTransactions: TransactionObj_i = {
    Pizza: -10,
    Books: -5,
    Job: 4
}

console.log(todaysTransactions.Pizza); // => -10
console.log(todaysTransactions['Pizza']); // => -10

let prop: string = 'Pizza';
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj_i):
number => {
    let total = 0
    for(const transaction in transactions){
        total += transactions[transaction]
    }
    return total;
}

console.log(todaysNet(todaysTransactions)); // => -11

todaysTransactions.Pizza = 40

console.log(todaysTransactions['Kiko']);

//ssssssssssss

interface Student_i {
   [key: string]: string | number | number[] | undefined 
   name: string,
   GPA: number,
   classes?: number[]
}

const student: Student_i = {
   name: 'Kerem',
   GPA: 3.6,
   classes: [100,200]
}

for (const key in student){
    console.log(`${key}: ${student[key as keyof Student_i ]}`);
} // => name: 'Kerem',
//      GPA: 3.6,
//      classes: 100,200

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student]);
}) // => 'Kerem',
//        3.6,
//        [100,200]

const logStudentKey_i = (student: Student_i,key: keyof Student_i): void =>{
    console.log(`Student ${key}: ${student[key]}`);
} 

logStudentKey_i(student,'GPA') // => Student GPA: 3.6


/* ssssssssssssssssssss */

/* interface Incomes_i {
    [key:string]: number
} */

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes_i = Record<Streams, number>

const monthlyIncome: Incomes_i = {
    salary: 50,
    bonus: 4,
    sidehustle: 2
}

for (const revenue in monthlyIncome){
    console.log(monthlyIncome[revenue as keyof Incomes_i]);
    
}
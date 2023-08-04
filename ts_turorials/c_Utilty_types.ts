// Utulity Types

// Partial 
interface Assignment{
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: 
Partial<Assignment>): Assignment => {
    return {...assign, ...propsToUpdate}
}


const assign1: Assignment = {
    studentId: "compsci12",
    title: "Final ",
    grade: 0
}

console.log(updateAssignment(assign1, {grade: 95}));
const assignGraded: Assignment = updateAssignment(assign1,{grade: 95})


// Required and Readonly

const recordAssignment = (assign:
Required<Assignment>): Assignment => {
    // send to database, etc.
    return assign
}

const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true
}

recordAssignment({...assignGraded, verified: true})

// Record 

const hexColorMap: Record<string,string> ={
    red:"FF0000",
    green:"00FF00",
    blue:"0000FF",
}

type Students_r = "sara" | "keyle"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrade: Record<Students_r,LetterGrades> = {
    sara:"B",
    keyle:"C"
}

interface Grades {
    assign1: number,
    assign2: number,
}

const gradeDate: Record<Students_r,Grades> = {
    sara:{assign1:32,assign2:23},
    keyle:{assign1:312,assign2:323}
}

// Pick and Omit

type AssignmentResult = Pick <Assignment,"studentId" |"grade">

const score: AssignmentResult = {
    studentId: "k23",
    grade: 45
}

type AssignPreview = Omit<Assignment,"grade" | "verified">

const preview: AssignPreview = {
    studentId:'fsd3',
    title:"final"
    //verified: true,
    //grade:32
}



// Exclude and Extract


type adjustedGrade = Exclude<LetterGrades, "U">

type highGrades = Extract<LetterGrades, "A" | "B">


// Nonnullable

type allPossibleGrades = "Kerem" | "Dave" | null | undefined 

type namesOnly = NonNullable<allPossibleGrades>


// ReturnType

//type newAssign = {title: string, points: number}

const createNewAssing = (title: string, points: number => {
    return {title,points}
}

type newAssign = ReturnType<typeof createNewAssing>

const tsAssign: newAssign = createNewAssing("utilty type", 100)
console.log(tsAssign);


// Parameters

type AssingParams = Parameters<typeof createNewAssing >


const assingArg: AssingParams = ["generics",100]

const tsAssign1: newAssign = createNewAssing(...assingArg)

console.log(tsAssign);


// Awaited - helps us with the ReturnType of a Promise

interface User{
    id: number,
    name: string,
    username:string,
    email: string
}

const fetchUsers = async (): Promise<User[]> => {
    
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if(err instanceof Error) console.log(err.message);
    })
    return data
}

type FetchUsersREturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))
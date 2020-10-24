
//UNION TYPES

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function getStatus(lock:LockStates):WindowStates{
    return 'open';
}
getStatus("locked");

/************************************************************************************************************************************** */

//GENERICS TYPES

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

let arr:Array<string>=['1','2','3'];

function getStrArray():StringArray {
    return arr;
}

/************************************************************************************************************************************** */


//STRUCTURAL TYPES

interface User{
    name:string,
    id:number
}

let usr:User={name:'Madhu',id:30};

let usrList:Array<User> =[{name:'Madhu',id:30},{name:'VIVAAN',id:5}]
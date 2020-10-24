//1.No side effects -> doesn't change anything outside it
//2.same input same output ->irrespective of no of times (IDEMPOTENT)
//3. doesn't modify data passed to them ;create new data without altering them


//IMPURE FUNCTION

const arr=[1,2,3]

function makearray(arr){
    return arr.pop();     
}

makearray(arr)    //modify arr outside its scope
console.log(arr)


//PURE FUNCTION

const arr1=[1,2,3,4]

function makearray(arr1){
    let copyArr=[...arr1];
    return copyArr.pop();
}

makearray(arr1)    //modify arr doesn't modify outside its scope
console.log(arr1)


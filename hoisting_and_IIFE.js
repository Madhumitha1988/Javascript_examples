console.log(sing);  //UNDEFINED
console.log(fn2()); //hello funnction 2

//console.log(fn1()); -->ERROR
//console.log(sing2); -->ERROR

//function is hoisted
function fn2() {
    console.log('hello funnction 2')
}

//const is not hoisted
const fn1 = () => {
    console.log('Hello  not hoisted');
}

//let is not hoisted
let sing2 = 'oh oh llaa';

//var is hoisted
var sing = 'oh lala laa'
/************************************************************************************************************** */

//IIFE - cant be overritten by other script files
    (function fn3() {
        var z = 1;
        console.log('In Immediately invoked function expression');
        function happy() {
            console.log('Iam happy inside iife');
        }
        happy()
    }())
//Encpsulation using IIFE
var script1 = (function fn3() {
    var z = 1;
    console.log('In Immediately invoked function expression');
    function happy() {
        console.log('Iam happy inside iife');
    }
    return { happy: happy,
                /*z:z */}
}())

script1.happy()
//script1.z --> cannot accessed from outside world since not returned


/************************************************************************************************************** */

//SCOPES 

//var - >functional scope
//let - >Block scope

const scopeFn = () => {
    for (var i = 0; i <= 5; i++) {
    }
    for (let j = 0; j <= 10; j++) {
    }
    console.log(i); //o/p ->6
    //console.log(j); ->Error
}

scopeFn();

/************************************************************************************************************** */

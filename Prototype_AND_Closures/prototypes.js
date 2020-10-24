function fn2(){
    console.log(__proto__);
    return 'hello';
}

console.log("fn2.prototype is available");
console.log(`fn2.prototype.__proto__  points to Function.prototype ${fn2.prototype.__proto__}`);
console.log(`Function.prototype has  {__proto__,call,apply,bind}`)
console.log(`Function.prototype.__proto__ points to Object.prototype`);
console.log('Object.prototype.__proto__ is null')



const array=[1,2,3,4]

console.log("array.prototype is not available");
console.log(`array.__proto__ points to Array.prototype`);
console.log(`Array.prototype has all array fns splice,length,foreach,map ..etc`)
console.log(`Array.prototype.__proto__ points to Object.prototype`)
console.log('Object.prototype.__proto__ is null')


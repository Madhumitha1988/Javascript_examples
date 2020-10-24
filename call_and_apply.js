const obj1={
    name:'Madhu',
    sing:function(){
        console.log('obj.sing ->'+this.name) ;
      }
}

const obj={
    name:'mitha'
}

obj1.sing() ;//output madhu
obj1.sing.call(obj);  //calling a function with different object //O/P ->Mitha



const obj1={
    name:'Madhu',
    sing:function(...age){
        console.log(`obj.sing -> ${this.name} age ->${[...age]}`) ;
      }
}

const obj={
    name:'mitha'
}

obj1.sing(25,15,56) ;//output madhu
obj1.sing.call(obj,20);  //calling a function with different object //O/P ->Mitha

obj1.sing.apply(obj,[15,5])



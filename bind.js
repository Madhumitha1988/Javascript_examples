
const obj={
    name:'Madhu',
    sing:function(){
        console.log('obj.sing ->'+this.name) ;
        var otherFunction= function(){
            console.log(`other function ${this.name}`)
        }
        return otherFunction;
    }
}

let singFn=obj.sing(); //this points to obj O/P->Madhu
singFn() // this to window object o/p->undefined


//Function returning other fn must bind this to avoid pointing window obj
const obj={
    name:'Madhu',
    sing:function(){
        console.log('obj.sing ->'+this.name) ;
        var otherFunction= function(){
            console.log(`other function ${this.name}`)
        }
        return otherFunction.bind(this); //this is binded to return function
    }
}

let singFn=obj.sing(); //this points to obj O/P->Madhu
singFn() // this to window object o/p->undefined
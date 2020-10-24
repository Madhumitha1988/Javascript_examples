
//IMPLICT BINDING
function fn1(){
    const name='mitha';
    console.log(this);   //this->window object
}

const obj={
    name:'Madhu',
    sing(){
        return `lalala ${this.name}` //lalla Madhu 
    }
}
obj.sing() //this points to object\



//EXPLICT BINDING


const obj={
    name:'Madhu',
    sing(){
        return function(){
            return `lalala ${this.name}` //lalla Madhu 
        }.bind(this)
    }
}

var otherFunction = obj.sing();
otherFunction()  // 'this' points to 'obj' due to explicit bind . Not window object



//ARROW FUNCTIONS  - this to the lexical scope


const obj={
    name:'Madhu',
    sing(){
        return  ()=>{
            return `lalala ${this.name}` //lalla Madhu 
        }
    }
}

var otherFunction = obj.sing();
otherFunction()  // 'this' points to 'obj' due to arrow fns have lexical 'this' binding



//this with NEW keyword

function obj(name,age){
    this.name=name;
    this.age=age;  // this points to functional scope due to 'new'
}

const object = new obj('Madhu' ,'30');

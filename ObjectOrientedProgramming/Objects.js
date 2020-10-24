//1. Object oriented programming with Object.create

const method = {
    attack() { console.log(`This ia a method  attack ${this.name}`) },
    bite: () => {
        console.log(`This ia a method bite ${this.name}`) //undefined -> arrow fn this points to 'method' object
    },
    cry: function () {
        console.log(`This ia a method cry ${this.name}`)
    }
}

function objCreate(name, age) {
    const object = Object.create(method);
    object.name = name;
    object.age = age;
    return object;
}

const object = new objCreate('madhu', 25);
object.attack();
object.bite();
object.cry();

//This ia a method  attack madhu
//This ia a method bite undefined
//This ia a method cry madhu

/************************************************************************************************************************************************** */

//2.  Constructor Functions


function objCreate(name, age) {
    this.name = name;  //with new keyword tis points to functional context not window
    this.age = age;
}
objCreate.prototype.attack = function () { console.log(`This ia a method  attack ${this.name}`) };
objCreate.prototype.bite = () => {
    console.log(`This ia a method bite ${this.name}`) //undefined -> arrow fn this points to lexical context
}
objCreate.prototype.cry = function () {
    console.log(`This ia a method cry ${this.name}`)
}


const object = new objCreate('madhu', 25);
object.attack();
object.bite();
object.cry();


/************************************************************************************************************************************************** */


//3. using class its a sugar coating of constructor functions and prototypes

class objCreate {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    attack() { console.log(`This ia a method  attack ${this.name}`) }
    bite = () => {
        console.log(`This ia a method bite ${this.name}`) //madhu  -> arrow fn this points to class
    }
    cry = function () {
        console.log(`This ia a method cry ${this.name}`)
    }
}

const object = new objCreate('madhu', 25);
object.attack();
object.bite();
object.cry();



//Internally class are converted into this

var objCreate = (function () {
    function objCreate(name, id) {
        this.name = name;
        this.id = id;
    }
    objCreate.prototype.attack = function () { console.log(`This ia a method  attack ${this.name}`) };
    objCreate.prototype.bite = () => {
        console.log(`This ia a method bite ${this.name}`) //undefined -> arrow fn this points to lexical context
    };
    objCreate.prototype.cry = function () {
        console.log(`This ia a method cry ${this.name}`)
    };
    return objCreate;
}());
const object = new objCreate('madhu', 25);
object.attack();
object.bite(); //o/p this.name =>points to 'Madhu'
object.cry();



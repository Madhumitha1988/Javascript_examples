class Character{
    constructor(name,weapon){
        this.name=name;
        this.weapon=weapon;
    }
    attack(){
        return `attack with ${this.weapon}`
    }
}

class Ogre extends Character{
    constructor(name,weapon,type){
        super(name,weapon);
        this.type=type;
    }
    makeFort(){
        return `make fort for ${this.type} - ${this.name}`
    }
}


const dolby=new Ogre('Zena','sword','ogre')

console.log(dolby.attack());
console.log(dolby.makeFort());



console.log(Ogre.prototype.isPrototypeOf(dolby));
console.log(Character.prototype.isPrototypeOf(Ogre.prototype));
console.log(Character.prototype.isPrototypeOf(dolby));




console.log(`dolby.__proto__ points to Ogre.prototype`);
console.log(`Ogre.prototype.__proto__ points to Character.prototype`);
console.log(`Character.prototype.__proto__ points to Fuction.prototype`)
console.log(`Function.prototype.__proto__ points to Object.prototype`)
console.log(`Object.prototype.__proto__ points to null`)
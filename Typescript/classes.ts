interface User {
    name: string,
    id: number
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id
    }

    getAdminUser(): User {
        return { name: this.name, id: this.id }
    }
    deleteUser(user:User){
        console.log(`Delete a user`);
    }
}

const userObj1: User = new UserAccount('Madhu', 30);


//tsc classes.ts
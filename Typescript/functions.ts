interface User {
    name: string,
    id: number
}

function getAdminUser(): User {
    return { name: this.name, id: this.id }
}
const deleteUser=(user:User):string=>{
    console.log(`Delete a user`);
    return 'deleted'
}


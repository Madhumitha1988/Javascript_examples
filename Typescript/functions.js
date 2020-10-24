function getAdminUser() {
    return { name: this.name, id: this.id };
}
var deleteUser = function (user) {
    console.log("Delete a user");
    return 'deleted';
};

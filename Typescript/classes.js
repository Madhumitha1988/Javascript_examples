var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    UserAccount.prototype.getAdminUser = function () {
        return { name: this.name, id: this.id };
    };
    UserAccount.prototype.deleteUser = function (user) {
        console.log("Delete a user");
    };
    return UserAccount;
}());
var userObj1 = new UserAccount('Madhu', 30);
//tsc classes.ts

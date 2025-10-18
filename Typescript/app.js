var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ------------------------------
//  Basic Types
// ------------------------------
var appName = "User Management System";
var version = 1.0;
var isOnline = true;
console.log("".concat(appName, " v").concat(version, " is running: ").concat(isOnline));
// ------------------------------
//  Type Inference
// ------------------------------
var adminUser = { id: 1, name: "Sowmiya", email: "sowmiya@example.com" };
// TS infers type as { id: number; name: string; email: string; }
// ------------------------------
//  Function with types
// ------------------------------
function greet(user) {
    return "Hello, ".concat(user.name, "! Your email is ").concat(user.email);
}
console.log(greet(adminUser));
// ------------------------------
//  Generic Function
// ------------------------------
function getFirstElement(arr) {
    return arr[0]; //array of type T,Whatever type you pass in, it returns the same type
}
console.log(getFirstElement([10, 20, 30])); // 10
console.log(getFirstElement(["apple", "banana"])); // apple
// ------------------------------
//  Decorator (Legacy)
// ------------------------------
// Method decorator to log method calls
function log(target, key) {
    var originalMethod = target[key];
    target[key] = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(" Method \"".concat(key, "\" called with arguments:"), args);
        return originalMethod.apply(this, args);
    };
}
// ------------------------------
//  Class with Decorator
// ------------------------------
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [];
    }
    //users → an array of User objects
    //private → only accessible inside this class
    //Initially empty: []
    UserService.prototype.addUser = function (user) {
        this.users.push(user);
        console.log(" User added: ".concat(user.name));
    };
    UserService.prototype.getAllUsers = function () {
        return this.users;
    };
    __decorate([
        log
    ], UserService.prototype, "addUser");
    __decorate([
        log
    ], UserService.prototype, "getAllUsers");
    return UserService;
}());
// ------------------------------
//  Using the Class
// ------------------------------
var service = new UserService();
service.addUser({ id: 1, name: "Sowmiya", email: "sowmiya@example.com" });
service.addUser({ id: 2, name: "Sri", email: "sriS@example.com" });
console.log(" All Users:", service.getAllUsers());

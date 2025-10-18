// ------------------------------
//  Basic Types
// ------------------------------
let appName: string = "User Management System";
let version: number = 1.0;
let isOnline: boolean = true;

console.log(`${appName} v${version} is running: ${isOnline}`);

// ------------------------------
//  Interface
// ------------------------------
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // optional
}

// ------------------------------
//  Type Inference
// ------------------------------
let adminUser = { id: 1, name: "Sowmiya", email: "sowmiya@example.com" };
// TS infers type as { id: number; name: string; email: string; }

// ------------------------------
//  Function with types
// ------------------------------
function greet(user: User): string {
  return `Hello, ${user.name}! Your email is ${user.email}`;
}

console.log(greet(adminUser));

// ------------------------------
//  Generic Function
// ------------------------------
function getFirstElement<T>(arr: T[]): T { //T can be any type (number, string, object, etc.)
  return arr[0]; //array of type T,Whatever type you pass in, it returns the same type
}

console.log(getFirstElement<number>([10, 20, 30]));         // 10
console.log(getFirstElement<string>(["apple", "banana"]));  // apple

// ------------------------------
//  Decorator (Legacy)
// ------------------------------
// Method decorator to log method calls
function log(target: any, key: string) {
  const originalMethod = target[key];
  target[key] = function (...args: any[]) {
    console.log(` Method "${key}" called with arguments:`, args);
    return originalMethod.apply(this, args);
  };
}

// ------------------------------
//  Class with Decorator
// ------------------------------
class UserService {
  private users: User[] = [];
//users → an array of User objects
//private → only accessible inside this class
//Initially empty: []

  @log
  addUser(user: User) {
    this.users.push(user);
    console.log(` User added: ${user.name}`);
  }

  @log
  getAllUsers(): User[] { //method to return all users
    return this.users;
  }
}

// ------------------------------
//  Using the Class
// ------------------------------
const service = new UserService();
service.addUser({ id: 1, name: "Sowmiya", email: "sowmiya@example.com" });
service.addUser({ id: 2, name: "Sri", email: "sriS@example.com" });

console.log(" All Users:", service.getAllUsers());

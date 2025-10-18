
# TypeScript User Management Example

This project demonstrates **TypeScript basics** including:

- Basic types  
- Interfaces  
- Type inference  
- Functions with type annotations  
- Generic functions  
- Decorators  
- Classes and encapsulation  

The project implements a simple **User Management System** with logging using a **method decorator**.


## Features

- Demonstrates **TypeScript static typing**  
- Optional properties in interfaces  
- Generic functions to handle multiple types  
- Method decorators for logging  
- Class encapsulation for managing users  
- Strong type safety and inference  

```bash
npm install -g typescript
````

3. Navigate to the project folder
4. Compile the TypeScript code:

```bash
tsc
```

* This will generate `index.js` based on `index.ts`

---

## How to Run

```bash
node index.js
```

* This runs the transpiled JavaScript file in Node.js
* You will see console output demonstrating type-safe operations and decorator logs

---

## Code Explanation

### Basic Types

```ts
let appName: string = "User Management System";
let version: number = 1.0;
let isOnline: boolean = true;
```

* `string`, `number`, and `boolean` are **primitive types** in TypeScript
* Type annotations enforce type safety

---

### Interfaces

```ts
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // optional
}
```

* Defines the structure of an object
* Optional properties marked with `?`

---

### Type Inference

```ts
let adminUser = { id: 1, name: "Sowmiya", email: "sowmiya@example.com" };
```

* TypeScript automatically infers the type from the assigned value
* Helps avoid repetitive type annotations

---

### Functions with Types

```ts
function greet(user: User): string {
  return `Hello, ${user.name}! Your email is ${user.email}`;
}
```

* Parameters and return types can be explicitly typed
* Ensures function is used correctly

---

### Generic Functions

```ts
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([10, 20, 30]);        // returns 10
getFirstElement<string>(["apple", "banana"]); // returns "apple"
```

* `T` is a **generic type parameter**
* Allows functions to handle multiple types while maintaining type safety

---

### Decorators

```ts
function log(target: any, key: string) {
  const originalMethod = target[key];
  target[key] = function (...args: any[]) {
    console.log(` Method "${key}" called with arguments:`, args);
    return originalMethod.apply(this, args);
  };
}
```

* Decorators are functions that **wrap methods or classes**
* Here, used to **log method calls**
* Requires `"experimentalDecorators": true` in `tsconfig.json`

---

### Classes

```ts
class UserService {
  private users: User[] = [];

  @log
  addUser(user: User) {
    this.users.push(user);
    console.log(` User added: ${user.name}`);
  }

  @log
  getAllUsers(): User[] {
    return this.users;
  }
}
```

* `private` restricts access to class members
* Methods decorated with `@log` will log every call and arguments
* Encapsulates **user management logic**

---

## Usage Example

```ts
const service = new UserService();
service.addUser({ id: 1, name: "Sowmiya", email: "sowmiya@example.com" });
service.addUser({ id: 2, name: "Sri", email: "sriS@example.com" });

console.log(" All Users:", service.getAllUsers());
```

* Adds users to the service
* Logs method calls due to decorator
* Retrieves all users

---

## Compiler Options (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "experimentalDecorators": true,
    "strict": true
  }
}
```

* `target`: Output JS version
* `module`: Module system for Node.js
* `experimentalDecorators`: Enable `@decorators`
* `strict`: Enables strict type checks for safer code



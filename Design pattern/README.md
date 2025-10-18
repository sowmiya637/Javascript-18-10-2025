
# JavaScript Design Patterns Calculator

This project demonstrates **multiple design patterns** in JavaScript through a simple calculator example.  
It covers:

- Singleton
- Factory
- Observer
- Module
- MVC (Model-View-Controller)
- Strategy

The calculator performs basic arithmetic operations and applies additional strategies like doubling or squaring the result.

## Features

- Single shared calculator instance (Singleton)  
- Factory for arithmetic operations (Factory Pattern)  
- Observer pattern for reactive updates  
- Modular UI display (Module Pattern)  
- MVC architecture for separation of concerns  
- Strategy pattern for additional operations  

## Design Patterns Used

### 1. Singleton

```js
const Calculator = (function() {
  let instance;
  function createInstance() {
    return { value: 0 };
  }
  return {
    getInstance: function() {
      if (!instance) instance = createInstance();
      return instance;
    }
  };
})();
````

* Ensures only **one instance** of the calculator exists
* Shared state across the application

---

### 2. Factory Pattern

```js
function OperationFactory(type) {
  switch(type) {
    case "add": return (a, b) => a + b;
    case "sub": return (a, b) => a - b;
    case "mul": return (a, b) => a * b;
    case "div": return (a, b) => a / b;
    default: return (a, b) => 0;
  }
}
```

* Creates different arithmetic operations dynamically
* Decouples operation creation from usage

---

### 3. Observer Pattern

```js
const Observer = (function() {
  const subscribers = [];
  return {
    subscribe: fn => subscribers.push(fn),
    notify: val => subscribers.forEach(fn => fn(val))
  };
})();
```

* Allows **reactive updates** to subscribers when values change
* UI is updated automatically when calculation occurs

---

### 4. Module Pattern

```js
const UI = (function() {
  return {
    display: val => console.log("Result:", val)
  };
})();
```

* Encapsulates functionality
* Provides a clean interface for displaying results

---

### 5. MVC (Model-View-Controller)

```js
const Model = { value: Calculator.getInstance().value };
const Controller = {
  calculate: function(a, b, operation) {
    const op = OperationFactory(operation);
    Model.value = op(a, b);
    Observer.notify(Model.value);
  }
};
```

* **Model**: stores the state
* **Controller**: handles logic
* **View (UI module)**: reacts to updates through Observer

---

### 6. Strategy Pattern

```js
const Strategy = {
  double: val => val * 2,
  square: val => val ** 2
};
```

* Encapsulates **additional operations** that can be applied dynamically to the model value

---

## Usage Example

```js
Observer.subscribe(UI.display);

Controller.calculate(5, 3, "add"); // Result: 8
Controller.calculate(10, 2, "mul"); // Result: 20

console.log("Double result:", Strategy.double(Model.value)); // 40
console.log("Square result:", Strategy.square(Model.value)); // 400
```

* `Observer.subscribe(UI.display)` ensures UI reacts to updates
* `Controller.calculate()` performs arithmetic using the Factory
* Strategy functions manipulate the current model value



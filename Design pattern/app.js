// ====================== Singleton ======================
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

// ====================== Factory ======================
function OperationFactory(type) {
  switch(type) {
    case "add": return (a, b) => a + b;
    case "sub": return (a, b) => a - b;
    case "mul": return (a, b) => a * b;
    case "div": return (a, b) => a / b;
    default: return (a, b) => 0;
  }
}

// ====================== Observer ======================
const Observer = (function() {
  const subscribers = [];
  return {
    subscribe: fn => subscribers.push(fn),
    notify: val => subscribers.forEach(fn => fn(val))
  };
})();

// ====================== Module ======================
const UI = (function() {
  return {
    display: val => console.log("Result:", val)
  };
})();

// ====================== MVC ======================
const Model = { value: Calculator.getInstance().value };
const Controller = {
  calculate: function(a, b, operation) {
    const op = OperationFactory(operation);
    Model.value = op(a, b);
    Observer.notify(Model.value);
  }
};

// ====================== Strategy ======================
const Strategy = {
  double: val => val * 2,
  square: val => val ** 2
};

// ====================== Usage ======================
Observer.subscribe(UI.display);

Controller.calculate(5, 3, "add"); // Result: 8 //run the logic
Controller.calculate(10, 2, "mul"); // Result: 20

console.log("Double result:", Strategy.double(Model.value)); // 40 //Strategy → dynamic operation on current model value
console.log("Square result:", Strategy.square(Model.value)); // 400

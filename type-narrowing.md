* What is Type Narrowing in TypeScript? Provide practical examples using typeof, instanceof, and the in operator.

Type Narrowing is a core feature in TypeScript that allows us to take a variable with a broad, union type (such as string | number or a mix of different objects) and refine it into a more specific, predictable type within a conditional block (like an if statement).

Because TypeScript performs static analysis (checking types before the code runs), it tracks the control flow of our application. When we use a runtime check (a type guard), TypeScript understands that a variable can only be of a specific type inside that block, allowing you to safely call methods or access properties specific to that type without compiler errors.

Practical Examples of Type Narrowing:
typeof:
The typeof operator is used to narrow primitive types like string, number, boolean, or symbol.
function formatInput(input: string | number) {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else {
    return input.toFixed(2);
  }
}

console.log(formatInput("hello")); // Output: "HELLO"
console.log(formatInput(123.456)); // Output: "123.46"



instanceof:
The instanceof operator checks whether an object is an instance of a specific class or constructor function.
class Dog {
  bark() {
    return "Gau Gau!";
  }
}

class Cat {
  meow() {
    return "Mew Mew!";
  }
}


function makeAnimalSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    return animal.bark(); 
  } else {
    return animal.meow(); 
  }
}
const myDog = new Dog();
console.log(makeAnimalSound(myDog)); // OutPut: "Gau Gau!"


in:
The in operator checks if a specific property exists within an object. This is exceptionally useful for narrowing down distinct object shapes inside a union type.
interface Dog {
  bark: () => void;
}

interface Cat {
  meow: () => void;
}

function makeNoise(animal: Dog | Cat) {
  if ("bark" in animal) {
    return animal.bark();
  } else {
    return animal.meow();
  }
}
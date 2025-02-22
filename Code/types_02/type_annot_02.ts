/**
 * Type annotation in TypeScript is a way to explicitly declare the type of a variable, function parameter, or function return value. Expressed using a colon (:) followed by the type, type annotations help the TypeScript compiler understand the intended data type and catch type-related errors during compile time.
 * 
 * Advantages:
 * - **Type Safety**: Helps catch type-related errors during compile time, reducing runtime errors.
 * - **Code Readability**: Makes the code more understandable by providing clear information about what types are expected.
 * - **Tooling Support**: Enhances IDE features like autocompletion, refactoring, and navigation.
 * - **Documentation**: Serves as inline documentation for developers, making it easier to understand the codebase.
 * 
 * Use Case:
 * Type annotations are particularly useful in large codebases or when working in teams, as they help maintain consistency and prevent type-related bugs. They are also beneficial when integrating with third-party libraries or APIs, ensuring that the data being passed around conforms to expected types.
 */

export {}; // to avoid global variable conflict

// Day --> 03
// for example

let myName:string = "Jeetu Singh"; // type: string
let age:number = 25; // type: number
// using string literals
console.log(`Name: ${myName}, Age: ${age}`); // Name: Jeetu Singh, Age: 25

console.log(age.toString());

let sum1:string = myName + age; // type: string
console.log(sum1); // Jeetu Singh25

// Type : number

let n1:number = 10;
let n2:number = 20;
let pi:number = 3.14;
let numNeg:number = -5;
let numHex:number = 0xf00d; // hexadecimal
let numBin:number = 0b1010; // binary
let numOct:number = 0o744; // octal

// let invalidNum:number = n1 + "years"; // error: Type 'string' is not assignable to type 'number'

// let invalidNum:number = "1234"; // error: Type 'string' is not assignable to type 'number'

// let val:number = Math.sqrt(n1 * n1 + n2 * n2); // type: number -- > valid

// let nan:number = NaN; // type: number (valid)


// Type : string

let f_name:string = "Jeetu";
let l_name:string = "Chaudhary";  
let m_name:string = "Singh"; 
let full_name:string = f_name + " " + m_name + " " + l_name; // type: string
console.log(full_name); // Jeetu Singh Chaudhary
// string length
let len:number = full_name.length; // type: number
console.log(len); // 20
// uppercase
let upperCase:string = full_name.toUpperCase(); // type: string
console.log(upperCase); // JEETU SINGH CHAUDHARY
// lowercase
let lowerCase:string = full_name.toLowerCase(); // type: string
console.log(lowerCase); // jeetu singh chaudhary
// string interpolation
let message:string = `Hello, ${full_name}!`; // type: string
console.log(message); // Hello, Jeetu Singh Chaudhary!

// substring
let subStr:string = full_name.substring(6, 11); // type: string
console.log(subStr); // Singh

// string comparison
let str1:string = "apple";
let str2:string = "banana";
let str3:string = "apple";
console.log(str1 === str2); // false
console.log(str1 === str3); // true

// string template
let template:string = `My name is ${full_name}, and I am ${age} years old.`; // type: string
console.log(template); // My name is Jeetu Singh Chaudhary, and I am 25 years old.

"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
// Day --> 03
// for example
var myName = "Jeetu Singh"; // type: string
var age = 25; // type: number
// using string literals
console.log("Name: ".concat(myName, ", Age: ").concat(age)); // Name: Jeetu Singh, Age: 25
console.log(age.toString());
var sum1 = myName + age; // type: string
console.log(sum1); // Jeetu Singh25
// Type : number
var n1 = 10;
var n2 = 20;
var pi = 3.14;
var numNeg = -5;
var numHex = 0xf00d; // hexadecimal
var numBin = 10; // binary
var numOct = 484; // octal
// let invalidNum:number = n1 + "years"; // error: Type 'string' is not assignable to type 'number'
// let invalidNum:number = "1234"; // error: Type 'string' is not assignable to type 'number'
// let val:number = Math.sqrt(n1 * n1 + n2 * n2); // type: number -- > valid
// let nan:number = NaN; // type: number (valid)
// Type : string
var f_name = "Jeetu";
var l_name = "Chaudhary";
var m_name = "Singh";
var full_name = f_name + " " + m_name + " " + l_name; // type: string
console.log(full_name); // Jeetu Singh Chaudhary
// string length
var len = full_name.length; // type: number
console.log(len); // 20
// uppercase
var upperCase = full_name.toUpperCase(); // type: string
console.log(upperCase); // JEETU SINGH CHAUDHARY
// lowercase
var lowerCase = full_name.toLowerCase(); // type: string
console.log(lowerCase); // jeetu singh chaudhary
// string interpolation
var message = "Hello, ".concat(full_name, "!"); // type: string
console.log(message); // Hello, Jeetu Singh Chaudhary!
// substring
var subStr = full_name.substring(6, 11); // type: string
console.log(subStr); // Singh
// string comparison
var str1 = "apple";
var str2 = "banana";
var str3 = "apple";
console.log(str1 === str2); // false
console.log(str1 === str3); // true
// string template
var template = "My name is ".concat(full_name, ", and I am ").concat(age, " years old."); // type: string
console.log(template); // My name is Jeetu Singh Chaudhary, and I am 25 years old.

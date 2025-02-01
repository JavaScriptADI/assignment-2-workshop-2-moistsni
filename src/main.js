// Work in this directory: src
let myString = "Georgia";
console.log (myString);

''5'' A text value, not a number.
5 numeric value.

let myNumber = 13;
console.log(myNumber)

let isActive = true;
console.log(isActive); 

Comparison Operators
These operators compare two values and return a boolean result:

== (Equal to): Returns true if the values are equal.
!= (Not equal to): Returns true if the values are not equal.
> (Greater than): Returns true if the left value is greater than the right value.
< (Less than): Returns true if the left value is less than the right value.
>= (Greater than or equal to): Returns true if the left value is greater than or equal to the right value.
<= (Less than or equal to): Returns true if the left value is less than or equal to the right value.


let message = "Hello"; 
let upperMessage = message.toUpperCase(); 
console.log(upperMessage); 

let anotherMessage = "World"; 
let lowerMessage = anotherMessage.toLowerCase();  
console.log(lowerMessage);  

The method doesn't save the value. It should be written like this. - text = text.toUpperCase();
 - text = text.toUpperCase();

 Since the variable text is declared but not assigned a value, its value is undefined.

 let text = 'Hello';
console.log(text.toLowerCase());


let age = prompt('How old are you?');
let nextAge = Number(age) + 1; 
console.log(`Next year you will be ${nextAge}`);


let name = prompt('What is your name?');
let age = Number(prompt('How old are you?'));
let isInSixties = age >= 60 && age <= 69; 
console.log(`${name} is in sixties: ${isInSixties}`);

The first console.log(x++) prints 5, and the second console.log(x) prints 6.

The first console.log(++y) prints 6, and the second console.log(y) also prints 6 because the value of y is now 6.

`x++` and `x--` are post-increment and post-decrement operators. `x++` increases the variable's value by 1 but returns the original value, while `x--` decreases the variable's value by 1 and returns the original value.

The difference between ++x and x++:

++x (Pre-Increment): Increments the value of x first and then uses the updated value in the expression.
x++ (Post-Increment): Uses the current value of x first and then increments it.
In short, ++x increments and returns the updated value immediately, while x++ returns the original value first and then increments it.


If you declare a variable without assigning a value to it, its value will be undefined.


let a = 5;
let b = '5';

console.log(a == b); 

let a = 5;
let b = '5';

console.log(a != b);


When you try to add a string and a number in JavaScript, the number is automatically converted to a string, and the operation becomes string concatenation rather than arithmetic addition.
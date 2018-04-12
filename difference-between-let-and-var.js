/* let and var have a lot of differences. I will explain each by a simple example.
 * 1. let is scoped to the nearest enclosing block where as var is scoped to the nearest function block.
 * 2. Visibility in Global scope.
 * 3. Performance.
 * 4. Redeclaration. 
 * 5. Global let variables are not added in the window object. 
 */

// 1. let is scoped to the nearest enclosing block where as var is scoped to the nearest function block.
// consider the following example. variable declared via var can be used inside anywhere within the function.
function byE40() {
    //nish *is* visible out here

    for( var nish = 0; nish < 5; nish++ ) {
        //nish is visible to the whole function
    }

    //nish *is* visible out here
}


//variable declared via let can only be used inside the for loop.
function allyIlliterate() {
    //tuce is *not* visible out here

    for( let tuce = 0; tuce < 5; tuce++ ) {
        //tuce is only visible in here (and in the for() parentheses)
        //and there is a separate tuce variable for each iteration of the loop
    }

    //tuce is *not* visible out here
}

//2. Visibility in Global scope. Declare a variable but access it before. Can be done with var. (hoisting) but not with let 
//let variables are only usable in lines of code that occur after the variable is declared (even though they are hoisted!).
war = 'bitch';
console.log(war);
var war;

// this will give an error. Variable not defined.
letItGo = hey;
console.log(letItGo); 
let letItGo ;

//3. Performance


//4. let variables may not be redeclared by a subsequent var or let.

//this is perfectly fine

var a = 'a';
var a = 'b';

//this is not fine.

let a = 'a';
let a = 'b'; //thorws an error;

//5. The window object is supported by all browsers. It represents the browser's window.
//   All global JavaScript objects, functions, and variables automatically become members of the window object.
//   Global let variables are not added in the window object.


/*  
 * NOTE: const is similar to let in all aspects apart from the fact that variable declared via const can't be reassigned.
 */
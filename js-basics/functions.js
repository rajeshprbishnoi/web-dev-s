//Hoisting

/*
In hoisting function defination and variable (declared with var) are kept on top and other(unexecuted)statement
are put into a queue
*/
console.log(beta()); // because of hoisting this statement won't be an error

function alpha() {
	return "a";
}

function beta() {
	return "b";
}

// Uncaught ReferenceError ;
/*
//Gamma works as an variable

 console.log(gamma); 
*/

let gamma = function () {
	return "g";
};

// Polymorphism

function area(height, width) {
	return height * width;
}

console.log("area 3,4 : ", area(3, 4));

// because width is undefined here output must be NaN
console.log("Area 4 : ", area(4));
/*
 In order to achieve polymorphism in JS we use if condition,
 If we try to define the function again to achieve polymorphisn (C++ & Java)
 we'll be overwriting the previous defined function
*/

// arguments array object :
/*
It's an array object available in every function by default, if we are not accepting any arguments in function
and at the time of function call arguments are passed then we can access those arguments using arguments array
object 
arguments is a keyword in JS 
*/

function hello() {
	console.log("Hello World! " + arguments[0] + " " + arguments[1]);
}

hello(1, 2);
hello("Rajesh", "Bishnoi");

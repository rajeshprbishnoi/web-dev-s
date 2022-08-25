// hof : higher order functions
function createGreeting(Greeting) {
	function greet(name) {
		console.log(Greeting + " " + name);
	}

	return greet;
}

let g1 = createGreeting("Good morning");
let g2 = createGreeting("Good Evening");

g1("Rajesh");
g2("Raje");

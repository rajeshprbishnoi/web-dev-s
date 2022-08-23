function a() {
	return 1;
}

console.log(1234, typeof 1234); // Output : Number
console.log(12.34, typeof 12.34); // Output : Number
console.log("a", typeof "a"); // Output : string
console.log("absd", typeof "absd"); // Output : string
console.log(null, typeof null); // Output : object
console.log(undefined, typeof undefined); // Output : undefined

console.log(a(), typeof a()); // output : 1, number

console.log(a, typeof a); // output of [typeof a] : function

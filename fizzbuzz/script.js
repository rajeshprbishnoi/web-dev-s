let inpNum = document.getElementById("inpNum");
let btnPrint = document.getElementById("btnPrint");
let ulNumList = document.getElementById("ulNumList");

btnPrint.onclick = function () {
	let start = Date.now();

	let num = Number(inpNum.value);

	let count = 1;
	let c3 = 0,
		c5 = 0;
	while (count <= num) {
		let node = document.createElement("li");
		let text = "";

		c3++, c5++;

		if (c3 == 3) {
			text += "Fizz";
			c3 = 0;
		}
		if (c5 == 5) {
			text += "Buzz";
			c5 = 0;
		}
		if (text === "") text = count;
		node.textContent = text;

		/*
		if (count % 3 == 0) text += "Fizz";
		if (count % 5 == 0) text += "Buzz";
		if (text === "") text = count;

		node.textContent = text;
        */

		/*
        if (count % 15 === 0) {
			node.innerHTML = "FizzBuzz";
		} else if (count % 3 === 0) {
			node.innerHTML = "Fizz";
		} else if (count % 5 === 0) {
			node.innerHTML = "Buzz";
		} else {
			node.innerHTML = count;
		} 
        */

		ulNumList.appendChild(node);
		count++;
	}

	console.log("Time Taken : ", Date.now() - start);
};

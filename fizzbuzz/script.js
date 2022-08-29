let inpNum = document.getElementById("inpNum");
let btnPrint = document.getElementById("btnPrint");
let ulNumList = document.getElementById("ulNumList");

btnPrint.onclick = function () {
	let start = Date.now();

	let num = Number(inpNum.value);

	let count = 1;
	while (count <= num) {
		let node = document.createElement("li");
		if (count % 15 === 0) {
			node.innerHTML = "FizzBuzz";
		} else if (count % 3 === 0) {
			node.innerHTML = "Fizz";
		} else if (count % 5 === 0) {
			node.innerHTML = "Buzz";
		} else {
			node.innerHTML = count;
		}
		ulNumList.appendChild(node);
		count++;
	}

	console.log("Time Taken : ", Date.now() - start);
};

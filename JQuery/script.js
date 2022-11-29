$(() => {
	let task = $("#task");
	let list = $("#list");

	let count = 0;
	$("#append").click(() => {
		let text = task.val();
		list.append($(`<li>${text}</li>`));
	});

	$("#prepend").click(() => {
		let text = task.val();
		list.prepend($(`<li>${text}</li>`));
	});
});

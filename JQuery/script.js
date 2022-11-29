$(() => {
	let list = $("#list");
	let page_num = 1;
	$("#fetch").click(() => {
		$.get(`https://reqres.in/api/users?page=${page_num}`, (data) => {
			page_num++;
			for (let p of data.data) {
				list.append(`
                <li> <img width="20px" height="20px" src="${p.avatar}">
                ${p.first_name} ${p.last_name}
                </li>`);
			}
		});
	});
});
/*
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
*/

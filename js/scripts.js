// user logic
$(document).ready(function() {
	$("#formOne").submit(function(event) {
	event.preventDefault();
	const userInput = $("input#input1").val();

$(".number1").parseInt(userInput);
});
});

// business logic

const numArray = []
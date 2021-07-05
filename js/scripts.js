// user logic
$(document).ready(function() {
	$("#formOne").submit(function(event) {
	event.preventDefault();
	let userInput = $("input#input1").val();
	let userInput = parseInt(userInput);
  });
	return userInput;
});

// business logic

const numArray = [];
let newArray = [];
for (let i=0; i<=userInput.length; i++) {
	numArray.forEach(function(number) {
	newArray.push(number+1)
	});
};
// utility logic


//business logic

let subArray;
let numArray;
for (let i = 0; i <= userInput.length; i++) {
	subArray.push(i);
	numArray.push(subArray.concat());
};

let newString = numArray.toString();

newString.replace(/3/g, "Won't you be my neighbor?");

newString.replace(/2/g, "Boop!");

newString.replace(/1/g, "Beep!");

//user logic

$(document).ready(function() {
	$("#formOne").submit(function(event) {
	event.preventDefault();
	let userInput = $("input#input1").val();
  });
});

$(document).ready(function() {
	$("formOne").submit(function(event) {
		event.preventDefault();
		$(".output").text(newString);
	});
});





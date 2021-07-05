// utility logic


//business logic

let subArray;
let numArray;
let newString;
function arrayMaker() {
  for (let i = 0; i <= userInput.length; i++) {
	  subArray.push(i);
	  numArray.push(subArray.concat());
  };
	newstring = numArray.toString();
};

function regexReplacer () {
  newString.replace(/3/g, "Won't you be my neighbor?");

	newString.replace(/2/g, "Boop!");

	newString.replace(/1/g, "Beep!");
};

//user logic

$(document).ready(function() {
	$("form#inputForm").submit(function(event) {
	event.preventDefault();
	const userInput = $("input#input1").val();
  });
});

$(document).ready(function() {
	$("form#inputForm").submit(function(event) {
		event.preventDefault();
		$(".output").text(newString);
	});
});





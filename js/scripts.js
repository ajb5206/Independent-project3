//business logic

let subArray;
let numArray;
function arrayMaker() {
  for (let i = 0; i <= userNumber.length; i++) {
	  subArray.push(i);
	  numArray.push(subArray.concat());
		return numArray.toString();
  }; 
}

function regexReplacer () {
  newString.replace(/\d{1,9}*3\d{1,9}*/g, "Won't you be my neighbor?");
	newString.replace(/\d{1,9}*2\d{1,9}*/g, "Boop!");
	newString.replace(/\d{1,9}*1\d{1,9}*/g, "Beep!");
  return newString;
}

//user logic

$(document).ready(function() {
	$("form#inputForm").submit(function(event) {
		event.preventDefault();
			const userNumber = parseInt($("#input1").val());
			let newString = arrayMaker(userNumber);
			const output = regexReplacer(newString);
			$("#output").text(output);
  });
});






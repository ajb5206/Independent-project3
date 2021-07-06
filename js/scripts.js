//business logic

let subArray;
let numArray;
let userString;
let userNumber;

function arrayMaker(_number) {
  for (let i = 0; i <= userNumber.length; i++) {
	  subArray.push(i);
	  numArray.push(subArray.concat());
		return numArray.toString();
  }; 
};

function regexReplacer(_string) {
	userString.replace(/\d{1,9}*3\d{1,9}*/g, "Won't you be my neighbor?");
	userString.replace(/\d{1,9}*2\d{1,9}*/g, "Boop!");
	userString.replace(/\d{1,9}*1\d{1,9}*/g, "Beep!");
  return userString;
};

//user logic

$(document).ready(function() {
	$("form#inputForm").submit(function(event) {
		event.preventDefault();
			const userNumber = parseInt($("#input1").val());
			userString = arrayMaker(userNumber);
  });
	return userString;
});


$(document).ready(function() {
	$("form#inputForm").submit(function(event) {
		event.preventDefault();
		const output = regexReplacer(userString);
		$("#output").text(output);
	});
});



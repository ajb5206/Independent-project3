//business logic


function arrayMaker(userInput) {
  let numArray = [];
	for (let i = 0; i <= userInput; i++) {
		const outputString = i.toString();
		//if (outputString.includes(3)) {
		//	numArray.push("Won't you be my neightbor?")
		//}
		if (outputString.includes(2)) {
			numArray.push("Boop!")
		} 
		else if (outputString.includes(1)) {
			numArray.push("Beep!")
		} 
		else {
			numArray.push(outputString)
		}
  }
	return numArray = numArray.join(", ");
};


//user logic

$(document).ready(function() {
	$("form#inputForm").submit(function(event) {
		event.preventDefault();
		let userInput = parseInt($("#input1").val());
		const userString = arrayMaker(userInput);
		$("#output").text(userString);
		$("#input1").val("");
  });
});





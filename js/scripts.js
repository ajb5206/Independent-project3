//business logic


function arrayMaker(number) {
  let numArray = [];
	for (let i = 0; i <= userInput; i++) {
		const outputString = i.toString();
		if (outputString.includes(3)) {
			numArray.push("Won't you be my neightbor?")
		}
		else if (outputString.includes(2)) {
			numArray.push("Boop!")
		} 
		else if (outputString.i.incudes(1)) {
			numArray.push("Beep!")
		} 
		else {
			numArray.push(outputString)
		}
  }
	return numArray;
};


//user logic

$(document).ready(function() {
	$("form#inputForm").submit(function(event) {
		event.preventDefault();
		const userInput = parseInt($("#input1").val());
		const userString = arrayMaker(userInput);
		// const output = regexReplacer(userString);
		$("#output").text(userString);
  });
	return userString;
});





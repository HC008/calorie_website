/*
 * Calculates amount of calorie limit left for the day.
 *
 */
function calAmount(limit, input, area) {
	var limitNum = document.getElementById(limit).value;
	var inputNum = document.getElementById(input).value;
	var display = document.getElementById(area);
	
	if (!isNaN(parseInt(inputNum)) && !isNaN(parseInt(limitNum))) {
		var remaining = limitNum - inputNum;
	
		display.innerHTML += "You only have " + remaining + " calories left for the day."
	}
	else {
		display.innerHTML += "One or more of your inputs is not a number.";
	}
}


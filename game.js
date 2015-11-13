function writeImage(){
	var div = document.getElementById('img')


div.innerHTML = '<img src="http://visitor.wsu.edu/Cougar%20Pride%20Sculpture2.jpg">'
}
function color(){
	document.getElementById('id').style.backgroundColor="green"
}
var guess = prompt("Did I go to college");
if (guess ="yes" || "y"||"Y"||"YES"){
	alert ("I did go to college!");
	writeImage()

}
else if (guess="no"||"n"||"N"||"NO"){
alert ("Try again");

}
var guess = prompt("Am in from Washington?");
if (guess="yes"||"y"||"Y"||"YES"){
	alert("That is correct");
	writeImage()
}
else if (guess="no"||"n"||"N"||"NO"){
alert("Sorry wrong answer!");
}
var guess = prompt ("Am i a niners fan?");
if (guess="no"||"n"||"N"||"NO") {
	alert("Thats right! I'm a Seahawks fan");
	writeImage()
}
else if (guess="yes"||"y"||"Y"||"YES"){
alert("No way dude!");}

var guess = prompt ("Do i like cheese?");
if (guess ="yes"||"y"||"Y"||"YES") {
	alert("Of course! Who doesn't");
	writeImage()
}
else if (guess="no"||"n"||"N"||"NO"){
alert("Say what?");}

var guess = prompt ("What is my age?");
if (guess = 39){alert ("Great guess!");
writeImage()
color()
}
else if (guess > 39)
	{alert ("You think I'm how old?");}
else if (guess < 39)
	{alert("Thank you! But I'm older than that");}

var college = "yes"
var washington = "yes"
var niners = "no"
var cheese = "yes"
var age = "39"
console.log(college);
console.log(washington);
console.log (niners);
console.log(cheese);
console.log(age);

var guessingGame = {
	questions:['Did I go to college?', 'Am I from Washington?', 'Am i a niners fan?'],

	answers:['yes','yes','no'],
}
 prompt (guessingGame.questions[0]);
 prompt (guessingGame.answers[0]);
  prompt (guessingGame.questions[1]);
 prompt (guessingGame.answers[1]);
prompt (guessingGame.questions[2]);
 prompt (guessingGame.answers[2]);



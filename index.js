 

// // // var firstName = "Igor";
// // // var lastName = "Pavloski";

// // // sayMyName(firstName, lastName);

// // // function sayMyName(firstName, lastName) {
// // // 	console.log("My name is" + firstName + "" + lastName);
// // // }

// // // function addTwoNumbers(x,y) {
	
// // // 	return x+y;
// // // }

// // // var zbir = addTwoNumbers(5,4);

// // // var myFunction = function (argument) {
// // // 	console.log("Heloo sedc 2017");
// // // }

// // // myFunction();

// // // console.log(Number("2"));

// // // console.log(Number("asdas"));

// // // ako ima globalna i lokalna so isto ime ke ja ispecati lokalnata

// // function myFunction(argument) {
// // 	var x = 10;

// // 	console.log(x);
// // }

// // var y = myFunction();

// // myFunction();



// function tellFortune(numberOfChildren, partnerName, geograficLocation, jobTitle) {
	
// 	console.log("You will be " + jobTitle + 
// 		" in " + geograficLocation + 
// 		", and maried to " + partnerName + 
// 		" with " + numberOfChildren + " Kids");
// };

// tellFortune(4,"Sanja","Skopje","Programer");

// tellFortune(5, "Irena", "Amsterdam", "Data Analist");

// tellFortune(0, "Marija", "Berlin", "Busines Intelegence Analist");

// tellFortune(4,5,4,5)


// var fridayCash = prompt("How much money do you have?");

// if (fridayCash>50) {
// 	alert ("You should go out to a dinner and a movie");

// } else if (fridayCash>=35) {
// 	alert ("You should go out to a fine meal");

// } else if (fridayCash >= 12) {
// 	alert ("You should go see a movie");

// } else {
// 	alert("Looks like you'll be watching TV");
// };

// switch(56) {

// 	case 3:
// 		console.log("The num is 3");
// 		break;
// 	case 4:
// 		console.log("The num is 4");
// 		break;
// 	case 10:
// 		console.log("Too much!");
// 	default:
// 		console.log("The default was executed");		

// }

var yearOfBirth = prompt("What is your year of birth")


switch((yearOfBirth-4)%12) {

	case 0:
		console.log("Rat");
		break;
	case 1:
		console.log("Ox");
		break;
	case 2:
		console.log("Tiger");
		break;
	case 3:
		console.log("Rabbit");
		break;
	case 4:
		console.log("Dragon");
		break;
	case 5:
		console.log("Snake");
		break;
	case 6:
		console.log("Horse");
		break;
	case 7:
		console.log("Goat");
		break;
	case 8:
		console.log("Monkey");
		break;
	case 9:
		console.log("Rooster");
		break;
	case 10:
		console.log("Dog");
		break;
	case 11:
		console.log("Pig");
		break;									
	default:
		console.log("The default was executed");
		break;		

}
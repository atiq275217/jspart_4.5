//var
var Masum="billah";
var Alamin="Islam";
console.log(Masum);
console.log(Alamin);
var myName="PK";
var myAge="25";
console.log("Atiqur Rahman",myName,"and my age is",myAge,"years");
//constant
const pi = 3.14159;
console.log("value of pi is",pi);

/* End part 1 BY lear with
Hasin Hayder*/
//Part-2
var a = 10;
var b = 12;
var c = 14;
console.log(a,b,c);
   /*oR*/
var a = 11, b = 13, c = 15;
console.log(a,b,c);
    /*OR*/
var a = 3
var b = 3
var c = 3
var d = 4
console.log(a,b,c,d);
     /*Or*/
var a = b = c = 2, d = 4;
console.log(a,b,c,d);
     /*Or*/
var a = b = c = 5;
var d = 6;
console.log(a,b,c,d);



/* string = cotesoner ("")('') moddhe ja thakbe, or paragraph.
   number = Ex: 1, 2, 3 etc.
   boolean = True or False 
   */
var paRa = "It's a Man"; // string
var p_i = 3.14159; // Number
var manIsmortal = true; // True or False
console.log(paRa,p_i,manIsmortal);
console.log(typeof paRa);// string
console.log(typeof p_i); // Number
console.log(typeof manIsmortal); // True or False

/* Undefined = jar vitore kuno kisu rakha hoi ni
  Null = it's a object
  */
var uN; // undifined
var nL = null; // Null
console.log(typeof uN);
console.log(typeof nL);
// End Part 2
// Start Part 3
  /*Math*/
var mangoPrice = 6;
var numberOfmango = 12;
var totalCostofmango = mangoPrice * numberOfmango;
console.log("total cost of mango is", totalCostofmango, "taka");

// area of a circle calculator pi*r spuared
var radius = 6;
const p_I = 3.14159;
var areaOfCircle = p_I * (radius * radius);
console.log("Area of the circle is", areaOfCircle,"Squar Inc");

// usd to bdt calculator
var usdTobdt = 82.5;
var bdt = 6000;
var usd = bdt / usdTobdt;
console.log("$", usd,"Dolor");

// Even and Odd
var n_1 = 7;
var r_1= 7 % 3; //even
console.log(r_1);

var n_1 = 6;
var r_1 = 6 % 3; // Odd
console.log(r_1);

//End Part -3

// Start Part-3.5
/*
Operator is + - * / %
Operand is x+Y operatorer dui passe ja thake tai operand
*/

var x = 4;
x++; // x = x+1
console.log(x);

var x = 6;
x--; // x = x-1
console.log(x);

var a;
var b = 7;
a = b++;
console.log("a =", a, "b =",b);
   //Or
var a;
var b = 8;
a = b;
b = b+1;
console.log("a =", a, "b =", b);

var x;
var y = 4;
x = ++y;
console.log("x =",x,"y = ", y);
  //Or
var x;
var y = 5;
y = y + 1;
x = y;
console.log("x =",x,"y = ", y);

// Assignment Operators
var x = 9;
x += 3; // x = x+3
console.log(x);
  // And
var x = 10;
x -= 2; // x = x-2
console.log(x);
   // and
var x = 12;
x *= 2; // x = x*2;
console.log(x);
// and
var x = 12;
x /= 2; // x = x/2;
console.log(x);
// and
var x = 13;
x %= 2; // x = x%2;
console.log(x);
// End part-3.5

// Start Part-4
  /* Compar 
	==
	!=
	<
	>
	<=
	>=
  */
  var n = 8;
  if (n<10) {
  	console.log(n);
  } else {
  	console.log(n);
  }
  // and
  var n = 80;
  if (n<10) {
  	console.log(n);
  } else {
  	console.log(n);
  }
     // exam;
 var n = 15;

 if (n<20) {
 	console.log(n);
 	console.log("This number",n,"is smaller than 20");
 }else {
 	console.log("this nuber",n,"is greater than 20");
 }
  // and
var n = 25;

 if (20>n) {  //20>n it's a good practrice
 	console.log(n);
 	console.log("This number",n,"is smaller than 20");
 }else {
 	console.log("this nuber",n,"is greater than 20");
 }

 var n = 20;
 var m = 22;

 if (n>m){
 	console.log("this number",n,"is greater than",m);
 }else{
 	console.log("this number",n,"is smaller than",m);
 }
 var n = 23;
 var m = 22;

 if (n>m){
 	console.log("this number",n,"is greater than",m);
 }else{
 	console.log("this number",n,"is smaller than",m);
 }

 var n = 22;
 var m = 22;

 if (n>m){
 	console.log("this number",n,"is greater than",m);
 }else if(n==m) {
 	console.log("this number",n,"is equal than",m);
 } else{
 	console.log("this number",n,"is smaller than",m);
 }

 // End Part-4

 // Start Part-4.5
 var personOne = "Atiq";
 var personTwo = "Masum";
 var areTheyBrother = true;

 if("Atiq"==personOne){
 	if("Masum"==personTwo){      // It's a Nesting Item
 		if(areTheyBrother){     // if("true"==areTheBrother)
 			console.log("Atiq & Masum are the Brother");
 		} else{
 			console.log("they are not Brother");
 		}
 	}
 }
   // Or
var personOne = "Atiq";
 var personTwo = "Masum";
 var areTheyBrother = false;

 if("Atiq"==personOne){
 	if("Masum"==personTwo){
 		if(areTheyBrother){     // if("true"==areTheBrother)
 			console.log("Atiq & Masum are the Brother");
 		} else{
 			console.log("they are not Brother");
 		}
 	}
 }

     // Or
var personOne = "Atiq";
var personTwo = "Masum";
var areTheyBrother = true;

if("Atiq"==personOne && "Masum"==personTwo && areTheyBrother){
	console.log("They are Brother");
}else{
	console.log("They are no Brother");
}

  // Or
var personOne = "Atiq";
var personTwo = "Masum";
var areTheyBrother = false;

if("Atiq"==personOne && "Masum"==personTwo && areTheyBrother){
	console.log("They are Brother");
}else{
	console.log("They are not Brother");
}
// Or operator and Prime Number exam: 1 to 10 = 2, 3, 5, 7

var n = 7;

if(n<10){
	if(2 == n || 3 == n || 5 == n || 7 == n){
		console.log("this number",n,"is smaller than 10 and it's a prime number");
	} else{
		console.log("this number",n,"is smaller than 10 and it's Not a prime number");
	} 
}else{
	console.log("this number",n,"is greater than 10");
}
// Or
var n = 8;

if(n<10){
	if(2 == n || 3 == n || 5 == n || 7 == n){
		console.log("this number",n,"is smaller than 10 and it's a prime number");
	} else{
		console.log("this number",n,"is smaller than 10 and it's Not a prime number");
	} 
}else{
	console.log("this number",n,"is greater than 10");
}
//Or
var n = 12;

if(n<10){
	if(2 == n || 3 == n || 5 == n || 7 == n){
		console.log("this number",n,"is smaller than 10 and it's a prime number");
	} else{
		console.log("this number",n,"is smaller than 10 and it's Not a prime number");
	} 
}else{
	console.log("this number",n,"is greater than 10");
}
// End part-4.5


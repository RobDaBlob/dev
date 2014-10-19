console.log("Hello, from 'more-to-say.js' !");
console.log("Say... Anything you want to....");

/* lets create a random number and have some fun. We can get a unique
number every time with this simple method! Pay attention to how each variable
is assigned a value. We use the Date() method to get time in m/s.
We use Math.floor(...) with our variables inside of the parathesis to 
get an integer. This is a great way to generate ID's or unique numbers to assign
things we may need to keep track of! Good thing it is easy!
You can use the Date(), Math.random() or Math.floor() functions anywhere in Javascript

-- created by Lane Boyer | github.com/laneboyerre | lane.boyer.re@gmail.com --
*/

//create the variable time we can get m/s from later to make our unique number

var time = new Date(); // this creates a new date object called time !

//create ms and use time to get it!

var ms = time.getMilliseconds(); // now we have the m/s of the actual current time!

/* now lets get a random number with Math.random()
and multiply it by ms to get a unique result!.. using
time and random as our friends! 
---> Remember to use Math.floor(...) ! <--- */

var random = Math.floor( ms * Math.random() ); /* Math.random() creates a random decimal number between 0 and 1. Math.floor() simply rounds to an integer value. */

console.log("Here is a random and unique number : " + random); //now we log the random variable!

console.log("Reload to see a new unique number show up!"); //refresh to see a new number again!

console.log("\nThis is showing\nhow we\nreturn lines\neasily."); //use \n to return lines with ease!

/* Lets write the random variable to the browser! This time we can be creative */
document.write("<div id='unique_holder'><p><h3>The unique variable generated is :</h3><p id='unique'>...</p>"); // <p id='unique'> will be used below!!!
document.getElementById("unique").innerHTML = "<em>" + random + "</em>"; /* You are officially writing javascript like a pro! */

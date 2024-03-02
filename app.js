// Task-1: Install Node.js, TypeScript and VS Code on your computer.
// Task-2: Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
console.log("Task-2:");
var personName = "Shariq";
console.log("Hello my name is " + personName + " and today i learn about some TypeScript");
// Task-3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("Task-3:");
var myName = "Shariq Najam Ansari";
console.log("this is in lowerCase " + myName.toLowerCase());
console.log("this is in upperCase " + myName.toUpperCase());
// for TitleCase/EachWordCapatalize 
var myName2 = "shariq najam ansari";
// now we add split function to break our string into array where space are added and save into a new variable
var strIntoArr = myName2.split(" ");
// now we create a new variable to store a new string which having TitleCase
var strTitleCase = "";
// now we using for loop to target our array 
for (var index = 0; index < strIntoArr.length; index++) {
    strTitleCase += strIntoArr[index].charAt(0).toUpperCase() + strIntoArr[index].slice(1).toLowerCase() + " ";
}
console.log("this is in title case ".concat(strTitleCase));
// Task-4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log("Task-4:");
console.log("print double quotes in string: Imran Khan once said in UN, \"And My Belief Is LA ILAHA ILLALLAH There Is No God But One And We Will Fight\"");
// Task-5: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
console.log("Task-5:");
var famous_person = "Imran Khan";
var message = "once said in UN, \"And My Belief Is LA ILAHA ILLALLAH There Is No God But One And We Will Fight\"";
console.log(famous_person + " " + message);
// Task-6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
console.log("Task-6:");
var myFullName = "Shariq\tNajam";
var myFullName2 = "Shariq\nNajam";
console.log(myFullName, "\n", myFullName2);
// Task-7: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log("Task-7:");
// Addition 
var numA = 1;
var numB = 7;
console.log("Addition Output: ", numA + numB);
// Subtraction
var numC = 100;
var numD = 92;
console.log("Subtraction Output:", numC - numD);
// Multiplication 
var numE = 2;
var numF = 4;
console.log("Multiplication Output:", numE * numF);
// Division 
var numG = 80;
var numH = 10;
console.log("Division Output:", numG / numH);
// Task-8: You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log("Task-8:");
console.log(6 + 2);
console.log(50 - 42);
console.log(1 * 8);
console.log(16 / 2);
// Task-9: Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
console.log("Task-9:");
var myFavoriteNumber = 83;
console.log("My Favorite Number is: ".concat(myFavoriteNumber));
// Task-10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
console.log("Task-10:");
// program 1 comment create sum function 
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 5));
// program 2 comment create subtract function 
function subtract(a, b) {
    return a - b;
}
console.log(subtract(50, 20));
// Task-11: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
console.log("Task-11:");
var names = ["Shariq", "Abdullah", "Hamza", "Bilal", "Ali", "Wajid", "Noman"];
for (var index = 0; index < names.length; index++) {
    console.log(names[index]);
}
// Task-12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
console.log("Task-12:");
var namez = ["Shariq", "Abdullah", "Hamza", "Bilal", "Ali", "Wajid", "Noman"];
var msg = "have a nice day and keep learning TypeScript";
for (var index = 0; index < namez.length; index++) {
    console.log(namez[index] + " " + msg);
}
// Task-13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
console.log("Task-13:");
var vehicles = ["Harley Davidson", "Suzuki Hayabusa", "Honda Civic", "Mercedes Benz", "Rolls Royce Phantom", "Lamborghini Aventador"];
for (var i = 0; i < vehicles.length; i++) {
    console.log("\"I would like to own a ".concat(vehicles[i], "\""));
}
// Task-14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
console.log("Task-14:");
var guestList = ["Shariq", "Abdullah", "Bilal"];
// now we using map method intead of for loop 
guestList.map(function (guest) {
    console.log("Hello ".concat(guest, " please accept the invitation of dinner today"));
});
// Task-15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
console.log("Task-15:");
var absentGuest = "Abdullah";
console.log("".concat(absentGuest, " is not attending dinner"));
var modifiedGuestLit = ["Shariq", "Abdullah", "Bilal"];
var newGuest = "Ali";
modifiedGuestLit[modifiedGuestLit.indexOf(absentGuest)] = newGuest;
// console.log(modifiedGuestLit);
modifiedGuestLit.map(function (list) {
    console.log("Hello ".concat(list, " please accept the invitation of dinner today"));
});

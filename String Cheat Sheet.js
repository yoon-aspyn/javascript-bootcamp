//QUOTES
var greeting = "It's great to see you!";
var response = 'Billy said, "I am sick"';

//ESCAPE CHARACTER
var greeting = 'It\'s great to see you!';
var response = "Billy said, \"I am sick";

//LENGTH PROPERTY
var greeting = "It's great to see you!";
greeting.length; //22

//STRING METHODS
//toUpperCase() 대문자 변환
var greeting = 'Good to see you!';
greeting;//'Good to see you!';

var shoutGreeting = greeting.toUpperCase();
shoutGreeting; // 'GOOD TO SEE YOU';

//Joining Strings
var greeting = "Hi,";
var myName = "Rob";
greeting + " " + myName; // "Hi, Rob"
/* Mini Project: Kelvin to Fahrenheit */
//Temperature in kelvin stored in variable `kelvin`
var kevinTemp = 301;

//Temperature in celsius stored in variable `celsius` 섭씨
var celsiusTemp = kevinTemp - 273.15;

//convert celsius to fahrenheit stored in variable `fahrenheit` 화씨
var fahrenheitTemp = celsiusTemp * (9 / 5) + 32;

//round the value of fahrenheit down and assign to `fahrenheit`
//Math.cell : 올림 / floor : 내림 / round : 반올림 
fahrenheitTemp = Math.floor(fahrenheitTemp);

console.log(" The temperature is " + fahrenheitTemp + " degrees Fahrenheit ");


/* Mini Project: Cat Years */
// assign my age to the variable `myAge`
var myAge = 20;

// assign early years to the variable `earlyYears`
var earlyYears = 2;

//multiply `earlyYears` by `25` to account for early growth rate
earlyYears *= 25;

// substract `2` years from `myAge` and assign to 
//`laterYears`to account for growth rate of a cat after the first two years
var laterYears = myAge - 2;

// multiplying laterYears value by `4` to total cat years
laterYears *= 4;

//add value of earlyYears + laterYears fot the total age and assignt to `myAgeInCatYears`

var myAgeInCatYears = earlyYears + laterYears;

// assign name to the variable `myName`
var myName = 'Yoon';

console.log(" My name is " + myName + ". I am " + myAge + "years old in human years which is " + myAgeInCatYears + " years old in cat years.");

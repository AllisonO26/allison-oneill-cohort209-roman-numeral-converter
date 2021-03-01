



// get a table of roman numerals and their corresponding Arabic numeral values
// store that information in a data structure, either 2 arrays or 1 2D array, or an object

function romanNumeralConverter(number) {
   var integer = number;
    const romanNumerals = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  const arabicNumeralValues = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

  var romanNumeralString = '';
for (let i = arabicNumeralValues.length - 1; i >= 0; i--){
while(integer >= arabicNumeralValues>[i]){
    integer -= arabicNumeralValues[i];
    romanNumeralString += romanNumerals[i];
}
}
    console.log(romanNumeralString);
}
romanNumeralConverter(5421)
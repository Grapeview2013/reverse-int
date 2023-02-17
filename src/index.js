module.exports = function reverse (n) {
    // Convert the number to a string
  let numberString = n.toString();
  
  // Split the string into an array of individual digits
  let regularDigits = numberString.split("");
  
  // Reverse the array of digits
  let reversedDigits = regularDigits.reverse();
  
  // Join the array of reversed digits back into a string
  let reversedString = reversedDigits.join("");

  
  // Convert the reversed string back to a number and return it
  return parseInt(reversedString);
}

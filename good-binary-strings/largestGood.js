// Using Node will render the result in a terminal
// $node largestGood.js

function largestGood(binary) {
  if (binary.length == 0) {
    return binary;
  }

  let step = 0;
  let difference = 0;
  let goodBinaries = [];

  for (let counter = 0; counter < binary.length; ++counter) {
    difference += binary[counter] == "1" ? 1 : -1;

    if (difference === 0) {
      // recursively find the largest good
      // in between the binary substring step+1, and the current counter
      let deeperLargestGood = largestGood(binary.substring(step + 1, counter));

      // ensure good binary requirements are met
      goodBinaries.push("1" + deeperLargestGood + "0");
      step = counter + 1;
    }
  }

  goodBinaries.sort();
  goodBinaries.reverse();

  return goodBinaries.toString().replace(",", ""); // convert array to string
}

console.log(largestGood("11011000"));
console.log(largestGood("1100"));
console.log(largestGood("1101001100"));

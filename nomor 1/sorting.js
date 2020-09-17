function sorting(number) {
  var az = [];
  for (i = 0; i < number.length; i++) {
    az[i] = number[i];
  }
  var res = az.sort((a, b) => (a > b ? 1 : -1));
  var i,
    swap = 0;
  while (arraysEqual(number, res) == false) {
    for (i = 0; i < number.length - 1; i++) {
      //swap values
      if (number[i] > number[i + 1]) {
        var temp = number[i];
        number[i] = number[i + 1];
        number[i + 1] = temp;
        console.log("[" + number[i] + "] [" + number[i + 1] + "] -> " + number);
        swap += 1;
        break;
      }
    }
  }
  console.log("\njumlah swap : " + swap);
}

//function to check if array is sorted
function arraysEqual(a, b) {
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

sorting([4, 9, 7, 5, 8, 9, 3]);

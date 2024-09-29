let year = 2004;

function leapYear() {
  if (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) {
    return true;
  } else {
    return false;
  }
}

if (leapYear()) {
  console.log("It is a leap year");
} else {
  console.log("It is not a leap yaer");
}

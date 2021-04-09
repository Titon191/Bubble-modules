// RANDOMNUMBER
// Losuje losowy numer
// Przykład:
// Input: randomNumber(1, 10) || Przykładowy output: 7
const randomNumber = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max) + 1;
    return Math.floor(Math.random() * (max - min)) + min;
  }

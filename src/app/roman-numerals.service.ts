import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RomanNumeralsService {

  BASE_ROMAN_NUMBERS = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  constructor() { }

  romanNumerals = function (num) {
    let numCopy = num;
    let result = "";
  
    for (let i in this.BASE_ROMAN_NUMBERS) {
      while (numCopy >= this.BASE_ROMAN_NUMBERS[i]) {
        result += i;
        numCopy -= this.BASE_ROMAN_NUMBERS[i];
      }
    }

    console.log('result', num, '---', result)

    return result;
  };
}

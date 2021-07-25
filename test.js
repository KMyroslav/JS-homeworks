'use strict';

//Randomizes salary and adds it to result

// const employess = 10;
// const minSalary = 500;
// const maxSalary = 5000;

// let salary;
// let totalSalary = 0;

// for (let i = 1; i <= employess; i += 1) {
//   salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//   totalSalary += salary;
//   console.log(`Employee ${i} salary is: ${salary}`);
// }

// console.log(`Total sallary of all workers are: ${totalSalary}`);

/////////////////////////////////////////////////////

// finds even numbers

// const maxNumber = 88;
// const minNumber = 8;
// let result = 0;

// for (let i = minNumber; i <= maxNumber; i += 1) {
//   console.log(i);

//   if (i % 2 === 0) {
//     console.log(`Thats even number: ${i}`);
//     result += i;
//   }
// }

// console.log(`Result = ${result}`);

/////////////////////////////////////////////////////

// // Inverts letter cases

// const string = 'Normandy OH yeah NoT';

// const mass = string.split('');
// let invertedString = '';

// for (let i = 0; i < mass.length; i += 1) {
//   let letter = mass[i];

//   invertedString +=
//     letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLowerCase();

//   //   if (letter === letter.toLowerCase()) {
//   //     invertedString += letter.toUpperCase();
//   //   } else {
//   //     invertedString += letter.toLowerCase();
//   //   }
// }

// console.log(invertedString);

/////////////////////////////////////////////////////

// //checks if numbers in masses match

// const isNumbersMatch = function (mass, ...args) {
//   let newMass = [];

//   for (let i = 0; i < mass.length; i += 1) {
//     if (args.includes(mass[i])) {
//       newMass.push(mass[i]);
//     }
//   }

//   return newMass;
// };

// console.log(isNumbersMatch([1, 2, 3, 4, 5, 6], 2, 4, 6, 7, 8));

/////////////////////////////////////////////////////

// makes array of first and last element of argument array

// function getExtremeElements(array) {
//
//   let newArray = [];
//   const lastIndex = array.length - 1;

//   newArray.push(array[0]);
//   newArray.push(array[lastIndex]);

//   console.log(newArray);

//   return newArray;
//
// }

// getExtremeElements([4, 5, 6, 7, 8, 9]);
/////////////////////////////////////////////////////

// //Returnes longest word from string input

// function findLongestWord(string) {
//   const array = string.split(' ');

//   let longestWord = array[0];

//   for (let i = 0; i < array.length; i += 1) {
//     if (longestWord.length < array[i].length) {
//       longestWord = array[i];
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
/////////////////////////////////////////////////////

//makes new array with common things in 2 array inputs

// function getCommonElements(array1, array2) {
//   let commonArray = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       commonArray.push(array1[i]);
//     }
//   }
//   return commonArray;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));

/////////////////////////////////////////////////////

// makes array with only odd numbers from inputs

// function getEvenNumbers(start, end) {
//   const oddNumbersArray = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       oddNumbersArray.push(i);
//     }
//   }
//   return oddNumbersArray;
// }

// console.log(getEvenNumbers(10, 23));
/////////////////////////////////////////////////////

// let total = 0;
// const maxNumber = 838;

// for (let i = 0; i < maxNumber; i += 1) {
//   total += i;
// }
// console.log(`total value of added number to ${maxNumber} is: ${total}`);

/////////////////////////////////////////////////////

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let newArray = [];

//   for (const product of products) {
//     let obj = Object.keys(product);

//     if (obj.includes(propName)) {
//       newArray.push(product[propName]);
//     }
//   }
//   return newArray;
//   // Change code above this line
// }

// getAllPropValues('price');
/////////////////////////////////////////////////////

// // Change code below this line
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line

//   for (const number of array) {
//     if (args.includes(number)) {
//       matches.push(number);
//     }
//   }
//   console.log(matches);
//   // Change code above this line
//   return matches;
// }

// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
/////////////////////////////////////////////////////
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     for (const book of this.books) {
//       if (book === oldName) {
//         this.books.splice(this.books.indexOf(book), 1, newName);
//         console.log(book);
//       }
//     }
//   },
// };
/////////////////////////////////////////////////////
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line

//   updatePotionName(oldName, newName) {
//     for (const item of this.potions) {
//       if (item.name === oldName) {
//         const potionIndex = this.potions.indexOf(item);
//         item.name = newName;
//         console.log(this.potions);
//         return;
//       }
//     }

//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
/////////////////////////////////////////////////////
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const { books } = bookShelf;

//     books.forEach(book => {
//       if (book === oldName) {
//         books.splice(books.indexOf(book), 1, newName);
//         return;
//       }
//     });

//     // for (const book of books) {
//     //   if (book === oldName) {
//     //     books.splice(books.indexOf(book), 1, newName);
//     //     return;
//     //   }
//     // }
//     // Change code above this line
//   },
// };
// console.log(bookShelf.books);
// bookShelf.updateBook('Haze', 'Dungeon chronicles');
// console.log(bookShelf.books);
// bookShelf.updateBook('The last kingdom', 'Dune');
// console.log(bookShelf);
/////////////////////////////////////////////////////

// function findOutlier(integers) {
//   let odd = [];
//   let even = [];

//   for (const int of integers) {
//     if (int % 2 === 0) {
//       even.push(int);
//     } else {
//       odd.push(int);
//     }
//   }

//   if (odd.length > even.length) {
//     return Number(even[0]);
//   } else {
//     return Number(odd[0]);
//   }
// }

// findOutlier([0, 1, 2]);
/////////////////////////////////////////////////////
// function duplicateCount(text) {
//   let array = text.toLowerCase().split('');
//   let result = 0;

//   for (const char of array) {
//     const indexOfNextChar = array.indexOf(char) + 1;

//     if (array.slice(indexOfNextChar).includes(char)) {
//       result += 1;
//       array = array.filter(element => element !== char);
//     }
//   }
//   return result;
// }

// duplicateCount('aabBcde');
/////////////////////////////////////////////////////
// function bouncingBall(h, bounce, window) {
//   let timesBounce = 1;

//   if (h * bounce < window) {
//     return -1;
//   }

//   for (let i = 0; i < timesBounce; i += 1) {
//     if (h * bounce > window) {
//       timesBounce += 2;
//       h = h * bounce;
//     } else {
//       return timesBounce;
//     }
//   }
// }

// console.log(bouncingBall(30000.0, 0.66, 1.5));
/////////////////////////////////////////////////////
// barbarian, wizard, healer, rogue
// const Hero = function (
//   { hp, mana, xp, lvl } = { hp: 100, mana: 100, xp: 0, lvl: 1 },
// ) {
//   this.hp = hp;
//   this.mana = mana;
//   this.xp = xp;
//   this.lvl = lvl;
// };

// const wizard = new Hero({ hp: 100, mana: 140, xp: 250, lvl: 2 });
// console.log(wizard);

// const grandWizard = Object.create(wizard);
// grandWizard.hp = 150;
// console.log(grandWizard);

/////////////////////////////////////////////////////
// function Storage(items) {
//   this.items = items;
// }

// Storage.prototype.getItems = function () {
//   return this.items;
// };

// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
//   return this.items;
// };

// Storage.prototype.removeItem = function (item) {
//   for (let i = 0; i < this.items.length; i += 1) {
//     if (this.items[i] === item) {
//       this.items.splice(i, 0, item);
//       return;
//     }
//   }
// };

// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
/////////////////////////////////////////////////////
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
// Пиши код ниже этой строки

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   accessLevel;
//   blacklistedEmails = [];

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });
// console.log(mango);

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true
/////////////////////////////////////////////////////
// const players = [
//   { id: 'player-1', name: 'Abbb', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Bbbbbbb', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Abbba', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Aaaaa', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Aaab', timePlayed: 80, online: true },
// ];

// // const playersTimePlayedSorted = [...players].sort((first, second) => {
// //   return first.timePlayed - second.timePlayed;
// // });

// // const friendsOnline = [...players].sort((a, b) => {
// //   return a.online - b.online;
// // });

// const alphabetFriedns = [...players].sort((a, b) => {
//   for (let i = 0; i < a.name.length; i += 1) {
//     if (a.name.charCodeAt(i) - b.name.charCodeAt(i) === 0) {
//       continue
//     }
//     return a.name.charCodeAt(i) - b.name.charCodeAt(i);
//   }
//   // if (a.name.charCodeAt(0) - b.name.charCodeAt(0) === 0) {
//   //   return a.name.charCodeAt(1) - b.name.charCodeAt(1);
//   // }
//   // return a.name.charCodeAt(0) - b.name.charCodeAt(0);

//   // // return a.name[0] > b.name[0] ? 1 : -1;
// });
// console.table(alphabetFriedns);
/////////////////////////////////////////////////////
// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
//   const newArray = [];

//   numbers.forEach(number => {
//     if (number % 2 !== 0) {
//       newArray.push(number);
//     } else {
//       newArray.push(number + value);
//     }
//   });
//   console.log(newArray);
//   return newArray;
//   // Пиши код выше этой строки
// }

// changeEven([17, 24, 68, 31, 42], 100);
/////////////////////////////////////////////////////
/*
Write a function named first_non_repeating_letter that takes a string input,
 and returns the first character that is not repeated anywhere in the string.
For example, if given the input 'stress', the function should return 't',
 since the letter t only occurs once in the string, and occurs first in the string.
As an added challenge, upper- and lowercase letters are considered the same character,
 but the function should return the correct case for the initial letter. For example,
 the input 'sTreSS' should return 'T'.
If a string contains all repeating characters,
 it should return an empty string ("") or None -- see sample tests.
*/
// function firstNonRepeatingLetter(s) {
//   const array = s.toLowerCase().split('');
//   let index = -1;

//   array.forEach((element, i) => {
//     const arrayCopy = [...array];
//     arrayCopy.splice(i, 1);
//     if (!arrayCopy.includes(element) && index === -1) {
//       index = i;
//     }
//   });

//   if (index === -1) {
//     return '';
//   } else {
//     return s.split('')[index];
//   }
// }
/////////////////////////////////////////////////////
// //Write a function dirReduc which will take an array of strings
// //and returns an array of strings with the needless directions
// //removed(W < -> E or S < -> N side by side).

// function dirReduc(arr) {
//   let result = [...arr];

//   for (let i = 0; i < arr.length; i += 1) {
//     result.reduce((acc, direction, index, array) => {
//       if (
//         (direction === 'NORTH' && array[index + 1] === 'SOUTH') ||
//         (direction === 'SOUTH' && array[index + 1] === 'NORTH')
//       ) {
//         array.splice(index, 2);
//       } else if (
//         (direction === 'WEST' && array[index + 1] === 'EAST') ||
//         (direction === 'EAST' && array[index + 1] === 'WEST')
//       ) {
//         array.splice(index, 2);
//       }
//       return array;
//     }, []);
//   }
//   return result;
// }
/////////////////////////////////////////////////////
// function whoIsNext(names, r) {
//   // //   Brute;
//   //   if (r <= 15) {
//   //     let array = [...names];
//   //     for (let i = 0; i <= r - 1; i += 1) {
//   //       var result = array[0];
//   //       array.push(array[0], array[0]);
//   //       array.splice(0, 1);
//   //     }
//   //     return result;
//   //   }

//   let fullCycles = 0;
//   let namesQuantity = names.length;

//   while (r + names.length > namesQuantity * 2) {
//     namesQuantity *= 2;
//     fullCycles += 1;
//   }

//   return names[
//     Math.ceil((r + names.length - namesQuantity) / Math.pow(2, fullCycles) - 1)
//   ];
// }
/////////////////////////////////////////////////////
// function domainName(url){

//   let slashExp = /(?<=\/\/)[a-zA-Z0-9-]+(?=\.)|(?<=\.)[a-zA-Z0-9]+(?=\.)/ig
//   let dotExp = /(?<=\.)[a-zA-Z0-9-]+(?=\.)/ig
//   let noneExp = /[^.][a-zA-Z0-9-]+(?=\.)/ig

//   if (url.includes(("://") && "www.")){
//      return url.match(dotExp)[0].toString()
//   } else if(url.includes("://")) {
//      return url.match(slashExp)[0].toString()
//   }

//   return url.match(noneExp)[0].toString()
// }
/////////////////////////////////////////////////////
// function nextBigger(n) {
//   //   const arr = n.toString().split('').sort((a,b)=>b - a)
//   //   arr.reduce( (acc, number) =>acc+number,'')
//   //   return Number(arr.reduce((acc, number) => acc+number,''))
//   const arr = n.toString().split('');
//   const result = [...arr];
//   for (let i = 1; i < arr.length; i += 1) {
//     if (arr[arr.length - (i + 1)] < arr[arr.length - i]) {
//       result.splice(
//         arr.length - (i + 1),
//         2,
//         arr[arr.length - i],
//         arr[arr.length - (i + 1)],
//       );
//       break;
//     }
//   }
//   return Number(result.reduce((acc, number) => acc + number, ''));
// }
// nextBigger(12);
/////////////////////////////////////////////////////
// function nextBigger(n) {
//   const arr = n.toString().split('');
//   let compare = [];
//   let newArray = [];

//   for (let i = 1; i < arr.length; i += 1) {
//     if (arr[arr.length - (i + 1)] < arr[arr.length - i]) {
//       compare = arr.filter((number, index) => index >= arr.length - (i + 1));
//       break;
//     }
//   }

//   if (compare.length === 0) {
//     return -1;
//   }

//   compare.forEach(() => newArray.push([]));

//   if (compare.length >= 4)
//     for (let i = 0; i < compare.length; i += 1) {
//       for (let y = 0; y < compare.length; y += 1) {
//         if (y + i >= compare.length) {
//           newArray[i].push(compare[y + i - compare.length][0]);
//           continue
//         }
//         newArray[i].push(compare[y + i][0]);
//       }
//     }

//   console.log(newArray);

//   newArray = newArray.map(element =>
//     Number(element.reduce((acc, number) => acc + number, '')),
//   );

//   newArray = newArray
//     .reduce((acc, number, index) => {
//       if (number < acc && number > newArray[0]) {
//         return number;
//       }
//       return acc;
//     }, newArray[1])
//     .toString()
//     .split('');

//   arr.splice(-compare.length, compare.length, ...newArray);

//   return Number(arr.reduce((acc, number) => acc + number, ''));
// }

////////////
// function nextBigger(n) {
//   const arr = n.toString().split('');
//   let toCompare = [];

//   for (let i = 1; i < arr.length; i += 1) {
//     if (arr[arr.length - (i + 1)] < arr[arr.length - i]) {
//       toCompare = arr.filter((number, index) => index >= arr.length - (i + 1));
//       break;
//     }
//   }

//   if (toCompare.length === 0) {
//     return -1;
//   }

//   let permArr = [];
//   let usedChars = [];

//   function permute(input) {
//     let chars = [...input];
//     for (let i = 0; i < chars.length; i += 1) {
//       let ch = chars.splice(i, 1);
//       usedChars.push(ch);
//       if (chars.length === 0) permArr[permArr.length] = usedChars.join('');
//       permute(chars.join(''));
//       chars.splice(i, 0, ch);
//       usedChars.pop();
//     }
//     return permArr;
//   }

//   permute(toCompare);

//   permArr = permArr
//     .reduce((acc, number, index) => {
//       if (number > permArr[0] && number < acc) {
//         return number;
//       }
//       return acc;
//     }, Math.max(...permArr))
//     .toString()
//     .split('');

//   arr.splice(-toCompare.length, toCompare.length, ...permArr);

//   return Number(arr.reduce((acc, number) => acc + number, ''));
// }

/////////////////////////////////////////////////////
// const arr = [['8'], ['9'], ['0'], ['2']];

// const assortment = function (arr) {
//   let newArray = [];
//   arr.forEach(() => newArray.push([]));

//   for (let i = 0; i < arr.length; i += 1) {
//     for (let y = 0; y < arr.length; y += 1) {
//       if (y + i >= arr.length) {
//         newArray[i].push(arr[y + i - arr.length][0]);
//         continue
//       }
//       newArray[i].push(arr[y + i][0]);
//     }
//   }
// };

// console.log(assortment(arr));
/////////////////////////////////////////////////////
// let permArr = [];
// let usedChars = [];
// function permute(input) {
//   let chars = [...input];
//   for (let i = 0; i < chars.length; i += 1) {
//     let ch = chars.splice(i, 1);
//     usedChars.push(ch);
//     if (chars.length === 0) permArr[permArr.length] = usedChars.join('');
//     permute(chars.join(''));
//     chars.splice(i, 0, ch);
//     usedChars.pop();
//   }
//   return permArr;
// }

// console.log(permute(['6', '9', '5', '3']));
/////////////////////////////////////////////////////
// function scramble(str1, str2) {
//   const longer = str1.split('');
//   const shorter = str2.split('');

//   return shorter.every((element, index) => {
//     if (longer.includes(shorter[index])) {
//       longer.splice(longer.indexOf(element), 1);
//       return true;
//     } else {
//       return false;
//     }
//   });
// }
/////////////////////////////////////////////////////
// function scramble(str1, str2) {
//   let target = str2.length,
//     source = str1.length;
//   if (target <= source) {
//     const charhash = {};
//     for (let i = 0; i < target; i += 1) {
//       let char = str2[i];
//       charhash[char] = (charhash[char] || 0) + 1;
//     }

//     for (let i = 0; i < source && target > 0; i += 1) {
//       let char = str1[i];
//       if (charhash[char]) {
//         charhash[char] -= 1;
//         target -= 1;
//       }
//     }
//   }
//   return target == 0;
// }
/////////////////////////////////////////////////////
/* 
Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
Any live cell with more than three live neighbours dies, as if by overcrowding.
Any live cell with two or three live neighbours lives on to the next generation.
Any dead cell with exactly three live neighbours becomes a live cell.
 */
const button = document.querySelector('.btn');
const width = document.querySelector('#canvas').getAttribute('width');
const canvas = document.querySelector('#canvas').getContext('2d');
const size = (width * 2) / 50;
const cols = width / size;

function countNeighbours(i, j, cols, arr) {
  /*
    let upL = arr[i - 1][j - 1][2];
    let up = arr[i - 1][j][2];
    let upR = arr[i - 1][j + 1][2];
    let L = arr[i][j - 1][2];
    let central = arr[i][j][2];
    let R = arr[i][j + 1][2];
    let downL = arr[i + 1][j - 1][2];
    let down = arr[i + 1][j][2];
    let downR = arr[i + 1][j + 1][2];
    */
  let neighbours = 0;
  if (j === 0 && i === 0) {
    neighbours += arr[i][j + 1][2] + arr[i + 1][j][2] + arr[i + 1][j + 1][2];
    return neighbours;
  }
  if (j === cols - 1 && i === 0) {
    neighbours += arr[i + 1][j][2] + arr[i][j - 1][2] + arr[i + 1][j - 1][2];
    return neighbours;
  }
  if (j === 0 && i === cols - 1) {
    neighbours += arr[i][j + 1][2] + arr[i - 1][j][2] + arr[i - 1][j + 1][2];
    return neighbours;
  }
  if (j === cols - 1 && i === cols - 1) {
    neighbours += arr[i][j - 1][2] + arr[i - 1][j][2] + arr[i - 1][j - 1][2];
    return neighbours;
  }

  if (i === 0 && j !== 0 && j !== cols - 1) {
    neighbours +=
      arr[i][j - 1][2] +
      arr[i][j + 1][2] +
      arr[i + 1][j - 1][2] +
      arr[i + 1][j][2] +
      arr[i + 1][j + 1][2];
    return neighbours;
  }
  if (j === 0 && i !== 0 && i !== cols - 1) {
    neighbours +=
      arr[i - 1][j][2] +
      arr[i - 1][j + 1][2] +
      arr[i][j + 1][2] +
      arr[i + 1][j][2] +
      arr[i + 1][j + 1][2];
    return neighbours;
  }
  if (i === cols - 1 && j !== 0 && j !== cols - 1) {
    neighbours +=
      arr[i - 1][j - 1][2] +
      arr[i - 1][j][2] +
      arr[i - 1][j + 1][2] +
      arr[i][j - 1][2] +
      arr[i][j + 1][2];
    return neighbours;
  }
  if (j === cols - 1 && i !== 0 && i !== cols - 1) {
    neighbours +=
      arr[i - 1][j - 1][2] +
      arr[i - 1][j][2] +
      arr[i][j - 1][2] +
      arr[i + 1][j - 1][2] +
      arr[i + 1][j][2];
    return neighbours;
  } else {
    neighbours +=
      arr[i - 1][j - 1][2] +
      arr[i - 1][j][2] +
      arr[i - 1][j + 1][2] +
      arr[i][j - 1][2] +
      arr[i][j + 1][2] +
      arr[i + 1][j - 1][2] +
      arr[i + 1][j][2] +
      arr[i + 1][j + 1][2];
    return neighbours;
  }
}

const make2Darray = function (cols) {
  const arr = new Array(cols);
  for (let i = 0; i < cols; i += 1) {
    arr[i] = new Array(cols);
  }
  for (let i = 0; i < cols; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      let z = Math.round(Math.random() / 1.85);
      // if (j % 2 === 0) {
      //   z = Math.round(Math.random() / 1.5);
      // }
      arr[i][j] = [i, j, z];
    }
  }
  for (let i = 0; i < cols; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      arr[i][j].push(countNeighbours(i, j, cols, arr));
      if (arr[i][j][2] === 1) {
        canvas.fillStyle = `rgb(
            0,
            0, 
            ${Math.floor(Math.random() * 255)})`;
        canvas.fillRect(i * size, j * size, size, size);
      }
      if (arr[i][j][2] === 0) {
        canvas.clearRect(i * size, j * size, size, size);
      }
    }
  }
  return arr;
};

const arr = make2Darray(cols);

function gameOflife(arr, cols) {
  const arrCopy = [...arr];
  for (let i = 0; i < cols; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      let neighbours = countNeighbours(i, j, cols, arrCopy);
      if (neighbours < 2) {
        arr[i][j][2] = 0;
      } else if (neighbours > 3) {
        arr[i][j][2] = 0;
      } else if ((arr[i][j][2] === 1 && neighbours === 2) || neighbours === 3) {
        arr[i][j][2] = 1;
      } else if (arr[i][j][2] === 0 && neighbours === 3) {
        arr[i][j][2] = 1;
      }

      if (arr[i][j][2] === 1) {
        canvas.fillStyle = `rgb(
            0,
            0, 
            ${Math.floor(Math.random() * 255)})`;
        canvas.fillRect(i * size, j * size, size, size);
      }
      if (arr[i][j][2] === 0) {
        canvas.clearRect(i * size, j * size, size, size);
      }
    }
  }
}

window.addEventListener('keypress', onBtnClick);

function onBtnClick() {
  gameOflife(arr, cols);
}

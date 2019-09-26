var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

function longest_string(str_ara) {
  let max = str_ara[0].length;
  str_ara.map(v => max = Math.max(max, v.length));
  result = str_ara.filter(v => v.length == max);
  return result;
}


console.log(longest_string(words)) // the longest word of the array
let longestWord = longest_string(words)
longestWord = longestWord[0].length // how long is the word length

console.log(longestWord) 


var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

let sumArray = numbers => {
    return numbers.reduce(reducer)
};
let sumArrayWords = sumArray(numbers)// sum of the words 

console.log(sumArrayWords)

function dividingNumber(sumWords, calcNum) { 
  return sumWords / calcNum
}

console.log(dividingNumber(sumArrayWords, longestWord))

var numbersLevelone = [2, 6, 9, 10, 7, 4, 1, 9];
let sumLevelone  = sumArray(numbersLevelone) 
let avarageSum = sumLevelone / numbersLevelone.length

console.log(sumLevelone)
console.log(numbersLevelone.length + " dividing Num")
console.log(avarageSum)


// Write a function averageWordLength that receives an array of words and calculate the average length of the words:
var wordsLevel2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];

function averageWordLength (arrayOfWords) {
 return  sumArray(arrayOfWords).length / arrayOfWords.length
}

console.log(averageWordLength(wordsLevel2))


var duplicateWords = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

let uniquifyArray2 = new Set(duplicateWords); // this will also work 
console.log(uniquifyArray2)


let uniquifyArray = (arrayName) => { 
 return arrayName.filter((item, index) => {
  return arrayName.indexOf(item) === index
  })
}; 

console.log(uniquifyArray(duplicateWords))

var searchWords = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

let doesWordExist = (wordLooking, arrayNameSearch) => {
  if(arrayNameSearch.includes(wordLooking)){
  return true;
  }else {
  return false;
  }
}

console.log(doesWordExist('bzzz', searchWords))


var howManyTimesWords = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];





let howManyTimes = (wordArr, timeSearch) => {
let times = 0;
for(let i = 0; i < wordArr.length; i++){
if(wordArr[i] === timeSearch)
    times++;
}
console.log(times)
};


howManyTimes(howManyTimesWords, 'matter')
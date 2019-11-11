const HashMap = require('./HashMap');

const main = () => {
  let lor = new HashMap();

  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;

  lor.set('Hobbit', 'Bilbo');
  lor.set('Hobbit', 'Frodo');
  lor.set('Wizard', 'Gandalf');
  lor.set('Human', 'Aragorn');
  lor.set('Elf', 'Legolas');
  lor.set('Maiar', 'The Necromancer');
  lor.set('Maiar', 'Sauron');
  lor.set('RingBearer', 'Gollum');
  lor.set('LadyOfLight', 'Galadriel');
  lor.set('HalfElven', 'Arwen');
  lor.set('Ent', 'Treebeard');

  return lor;
};

// console.log(main());

// input: google, output: gole
// save to hashmap, key letter itself
// instead of replacing duplicate key, it should discard it - check if key exists, then discard if it does, save if it doesn't.
// Keep in order - save character order alongside value?

function removeDuplicates(string) {
  const stringMap = new HashMap();

  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;

  for (let i = string.length - 1; i >= 0; i--) {
    stringMap.set(string[i], i);
  }

  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (i === stringMap.get(string[i])) {
      newString += string[i];
    }
  }
  return newString;
}

// console.log(removeDuplicates('google all that you think can think of'));

function checkPalindrome(string) {
  const stringMap = new HashMap();

  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;

  //map string, set key=char, value=value+1
  //if letters count are equal, it is palindrome - there has to be an EVEN number of occurances for each char,
  // and only one ODD occurance if total number of letters is odd.
  for (let i = 0; i < string.length; i++) {
    stringMap.set(string[i], 0);
  }

  for (let i = 0; i < string.length; i++) {
    let counter = stringMap.get(string[i]) + 1;
    stringMap.set(string[i], counter);
  }

  let oddCounter = 0;
  for (let i = 0; i < string.length; i++) {
    if (stringMap.get(string[i]) % 2 !== 0) {
      oddCounter += 1;
    }
  }

  if (oddCounter > 1) {
    return false;
  } else {
    return true;
  }
}

// console.log(checkPalindrome('acecarr'));
// console.log(checkPalindrome('tattarrattat'));
// console.log(checkPalindrome('north'));

function anagramGrouping(arr) {

  const arrMap = new HashMap();

  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;

  // for each item in array, record each char used and number of characters
  // compare each item's characters and character totals; if they are even, they are anagrams and should be grouped together.
  // 

  for (let i = 0; i < arr.length; i++) {
    let item = 0;
    for (let j = 0; j < arr[i].length; j++) {
      item += arr[i].charCodeAt(j);
    }
    arrMap.set(arr[i], item);
  }

  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    let itemCode = arrMap.get(arr[i]);
    let groupArr = [];
    for (let j = 0; j < arr.length; j++) {
      if (itemCode === arrMap.get(arr[j])) {
        groupArr.push(arr[j]);
        arrMap.delete(arr[j]);
        console.log(groupArr);
        console.log(arrMap);
      }
    }
    arr.filter((item, i) => {
      console.log(groupArr[i]);
      console.log(item);
      groupArr[i] !== item;
    });
    console.log(arr);
    finalArr.push(groupArr);
  }
  return finalArr;
}



const testArr = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];
const outcome = [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']];

console.log('Testing outcome of anagramGrouping()...');
console.log('');
console.log(anagramGrouping(testArr));
console.log('');
console.log('----------');

if (anagramGrouping(testArr) === outcome) {
  console.log('Ace!');
} else {
  console.log('Bummer...');
}
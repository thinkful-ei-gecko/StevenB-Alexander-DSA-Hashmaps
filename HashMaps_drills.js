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

console.log(checkPalindrome('acecarr'));
console.log(checkPalindrome('tattarrattat'));
console.log(checkPalindrome('north'));
const HashMapChain = require('./HashMapChain');

const main = () => {
  let lor = new HashMapChain();

  HashMapChain.MAX_LOAD_RATIO = 0.8;
  HashMapChain.SIZE_RATIO = 3;

  lor.set('todd', 'Bilbo');
  lor.set('bob', 'Frodo');
  lor.set('Wizard', 'Gandalf');
  lor.set('Human', 'Aragorn');
  lor.set('Elf', 'Legolas');
  lor.set('Maiar', 'The Necromancer');
  lor.set('Maiar', 'Sauron');
  lor.set('RingBearer', 'Gollum');
  lor.set('LadyOfLight', 'Galadriel');
  lor.set('HalfElven', 'Arwen');
  lor.set('Ent', 'Treebeard');

  // console.log(lor.get('bob'))
  // console.log(lor.get('todd'))

  lor.delete('todd');
  console.log(lor.get('todd'));


  return lor;
};

console.log(main());
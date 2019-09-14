const HashMap = require('./hashmap')


// const main = () => {
//   let lor = new HashMap()
//     lor.MAX_LOAD_RATIO = 0.5
//     lor.SIZE_RATIO = 3

//     lor.set("Hobbit", "Bilbo")
//     lor.set("Hobbit", "Frodo")
//     lor.set("Wizard", "Gandolf")
//     lor.set("Human", "Aragon")
//     lor.set("Elf", "Legolas")
//     lor.set("Maiar", "The Necromancer")
//     lor.set("Maiar", "Sauron")
//     lor.set("RingBearer", "Gollum")
//     lor.set("LadyOfLight", "Galadriel")
//     lor.set("HalfElven", "Arwen")
//     // lor.set("Ent", "Treebeard")

//   console.log(lor)
// }
// main()


// const WhatDoesThisDo = function(){
//   let str1 = 'Hello World.';
//   // let str2 = 'Hello World.';
//   let map1 = new HashMap();
//   map1.set(str1,10);
//   map1.set(str1,20);
//   let map2 = new HashMap();
//   // let str3 = str1;
//   // let str4 = str2;
//   map2.set(str1,20);
//   map2.set(str1,10);

//   console.log(map1.get(str1));
//   console.log(map2.get(str1));
// }
// WhatDoesThisDo()


function removeDuplicates(phrase) {
  let phraseArray = phrase.split("")
  let stupidDrill = new HashMap()

  phraseArray.forEach((element) => {
    // stupidDrill.get(i)
    stupidDrill.set(element, element)
  });
  console.log(stupidDrill)
  
}
removeDuplicates("google")
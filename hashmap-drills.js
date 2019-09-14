const HashMap = require('./hashmap')


// const main = () => {
//   HashMap.MAX_LOAD_RATIO = 0.5
//   HashMap.SIZE_RATIO = 3
//   let lor = new HashMap()

//   lor.set("Hobbit", "Bilbo")
//   lor.set("Hobbit", "Frodo")
//   lor.set("Wizard", "Gandolf")
//   lor.set("Human", "Aragon")
//   lor.set("Elf", "Legolas")
//   lor.set("Maiar", "The Necromancer")
//   lor.set("Maiar", "Sauron")
//   lor.set("RingBearer", "Gollum")
//   lor.set("LadyOfLight", "Galadriel")
//   lor.set("HalfElven", "Arwen")
//   lor.set("Ent", "Treebeard")

//   console.log(lor.get('Hobbit'))
//   console.log(lor.get('Maiar'))
//   //console.log(lor)
// }
//main()


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


// const removeDuplicates = (phrase) => {
//   let phraseArray = phrase.split("")
//   let phraseMap = new HashMap()
//   let word = ''

//   phraseArray.forEach((elem) => {
//     try {
//       phraseMap.get(elem)
//     } catch {
//       phraseMap.set(elem, elem)
//       word += elem
//     }
//   })

//   console.log(word)
// }

// removeDuplicates("google all that you can think of")

// const removeDuplicates2 = (phrase) => {
//   let phraseArray = phrase.split('')
//   let word = ''
//   let tempArray = []

//   phraseArray.forEach(letter => {
//     if(!tempArray.includes(letter)) {
//       tempArray.push(letter)
//       word += letter
//     }
//   })
//   console.log(word)
// }

// removeDuplicates2('google')


  function permut(string) {
    if (string.length < 2) return string; // This is our break condition

    var permutations = []; // This array will hold our permutations

    for (var i=0; i<string.length; i++) {
        var char = string[i];

        // Cause we don't want any duplicates:
        if (string.indexOf(char) != i) // if char was used already
            continue;           // skip it this time

        var remainingString = string.slice(0,i) + string.slice(i + 1,string.length); //Note: you can concat Strings via '+' in JS

        for (var subPermutation of permut(remainingString))
            permutations.push(char + subPermutation)

    }
    return permutations;
}

let permutations = permut('east')
console.log(permutations)


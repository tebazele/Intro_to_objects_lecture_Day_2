// Create a person object
let me = {
  hair: 'brown',
  eyes: 'green',
  age: 38,
  wearsGlasses: true,
  listensToCoolMusic: false,
  luckyNumbers: [2, 8, 32],
  "family members": {
    mom: "Cindy",
    dad: "Greg",
    sister1: "Stephanie",
    sister2: "Maria"
  }
}

let otherPerson = {
  hair: 'black',
  eyes: 'brown',
  age: 15,
  wearsGlasses: false,
  listensToCoolMusic: true,
  luckyNumbers: [3, 7],
  "family members": {
    mom: "Micky",
    dad: "Daniel",
    grandma: "Aida",
    grandpa: "Tony"
  }
}

let myFriend = {
  hair: 'pink',
  eyes: 'blue',
  age: 25,
  wearsGlasses: false,
  listensToCoolMusic: true,
  luckyNumbers: [25, 52],
  "family members": {
    mom: "Linda",
    brother: "David"
  }
}

let question1 = "What color hair do you have?"
console.log(question1)
// Answer here
console.log(otherPerson.hair)

let question2 = "What are your lucky numbers?"
console.log(question2)
// Answer here
console.log(me.luckyNumbers)

let question3 = "What is your mom's name?"
console.log(question3)
// Answer here
console.log(me["family members"].mom)

// Create an array of cats

let cats = [
  {
    name: 'Gopher',
    emoji: '🐈‍⬛',
    age: 2,
    hasTail: true,
    favoriteToys: ['mouse']
  },
  {
    name: 'Dudley',
    emoji: '🐈',
    age: 2,
    hasTail: false,
    favoriteToys: ['mouse']
  },
  {
    name: 'Ramona',
    emoji: '😻',
    age: 12,
    hasTail: true,
    favoriteToys: ['couch']
  },
  {
    name: 'Iron Man',
    emoji: '🐅',
    age: 3,
    hasTail: true,
    favoriteToys: ['shoe lace', 'tube', 'laser pointer']
  },
  {
    name: 'Frankie',
    emoji: '😼',
    age: 5,
    hasTail: true,
    favoriteToys: ['cheese', 'laser pointer']
  },
]

// Let's log a name and image for each cat (manually first, then with a for loop)

console.log(cats[0].emoji, cats[0].name)


// Let's draw each cat to the page
document.getElementById('cat-room').innerHTML = `<h1>${cats[0].emoji}</h1>
<p>${cats[0].name}</p>`


// let allCatsInRoom = ''

// for (let j = 0; j < cats.length; j++) {
//   let cat = cats[j]
//   allCatsInRoom += cat.emoji
// }
// let catRoomElement = document.getElementById("cat-room");
// catRoomElement.innerHTML = `<h1>${allCatsInRoom}</h1>`
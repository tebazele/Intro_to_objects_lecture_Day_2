let myArray = ["container", "for", "data"]

// console.log(myArray[2])

let me = {
    name: "Jeanne",
    hair: "brown",
    eyes: "green",
    age: 38,
    wearsGlasses: true,
    listensToCoolMusic: false,
    luckyNumbers: [2, 8, 32],
    "family members": {
        mom: "Cindy",
        dad: "Greg",
        sister1: "Steph",
        sister2: "Maria"
    }
}

// console.log("What is the name of my sister?")
// console.log(me["family members"].grandma)

let otherPerson = {
    name: "Leeni",
    hair: "brown with blonde tips",
    eyes: "hazel",
    age: 10,
    wearsGlasses: true,
    listensToCoolMusic: true,
    luckyNumbers: [3],
    "family members": {
        mom: "Jeanne",
        grandma: "Cheryl",
        grandpa: "Greg"
    }
}
// console.log("What is the name of Leeni's grandma?")
// console.log(otherPerson["family members"].grandma)

let myFriend = {
    name: "Elijah",
    hair: "dirty blonde",
    eyes: "blue",
    age: 11,
    wearsGlasses: false,
    listensToCoolMusic: true,
    luckyNumbers: [-1732],
    "family members": {
        dad: "Robert",
        "a really annoying sister": "Madeline",
        grandma: "Marsha"
    }
}

// console.log("What is Eli's lucky number?")
// console.log(myFriend.luckyNumbers[0])

function drawFish() {
    // whatever's inside here, do it!

    let fishString = ""
    for (let i = 0; i < 10; i++) {
        fishString = fishString +  "･ﾟﾟ･:. ><((((°>  "
    }

    console.log(fishString)
}

// This function is being called on load/refresh
drawFish()
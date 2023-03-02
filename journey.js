let backpack = []

backpack.push("Pokeball")
backpack.push("Potion")
backpack.push("Pokedollars")

let belt = backpack.splice(0,1)

let foundItem = "Waterstone"
backpack.push(foundItem)

let itemUsed = backpack.pop()
// console.log("Eevee has evolved into ... Vaporean!!!")

let itemCount = backpack.length
// console.log(itemCount)

backpack.push("Great ball", "Antidote", "Revive")

// let satchel = backpack.splice(3, 2)

// console.log(backpack, belt, satchel)

// for ( i = 0; i < backpack.length; i++){
//     console.log(backpack[i])
// }

// for ( i = 0; i < 3; i++){
//     console.log(backpack[i])
// }

// if (backpack.length >= 3){
//     for ( i = 0; i < 3; i++){
//         console.log(backpack[i])
//     }
// }else{
//     for ( i = 0; i < backpack.length; i++){
//         console.log(backpack[i])
//     }
// }



//guessMeSlides

let guessMe = 54

while (guessMe < 100) {
    console.log("--------", guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        guessMe += 25
        console.log("guessMe is divisible by 4 or 5, added 25")
    } else if (guessMe % 3 === 0) {
        guessMe -= 27
        console.log("guessMe is divisible by 3, subtracted 27")
    } else {
        guessMe += 3
        console.log("guessMe hit 'else', added 3")
    }
    guessMe += 22
    console.log(`Added 22, guessMe is now: ${guessMe}`)
}

console.log('final value', guessMe)
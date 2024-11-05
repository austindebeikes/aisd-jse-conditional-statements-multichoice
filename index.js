let weather = 'sunny'

if (weather === 'rainy') {
    console.log("Take an umbrella!")
} else {
    console.log("Enjoy the sunshine!")
}

weather = 'cloudy'

if (weather === 'rainy') {
    console.log("Take an umbrella!")
} else if (weather === 'cloudy') {
    console.log("It might rain, take a jacket!")
} else {
    console.log("Enjoy the sunshine!")
}

weather = 'cloudy'

if (weather === 'rainy') {
    console.log("Take an umbrella!")
} else {
    console.log("Enjoy the sunshine!")
}
// } else if (weather === 'cloudy') {
//     console.log("It might rain, take a jacket!")
// }

let grade = 85

if (grade >= 90) {
    console.log("Excellent! You got an A.")
} else if (grade >= 80) {
    console.log("Good job! You got a B.")
} else if (grade >= 70) {
    console.log("You passed with a C.")
} else if (grade >= 60) {
    console.log("You passed with a D.")
} else {
    console.log("You didn't pass this time. Keep trying!")
}
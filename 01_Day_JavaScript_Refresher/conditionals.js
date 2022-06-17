// 1) Get user input using prompt(“Enter your age:”). If user is 18 or older , 
// give feedback:'You are old enough to drive' but if not 18 give another 
// feedback stating to wait for the number of years he needs to turn 18.

// let age = prompt('what is your age')

// age >= 18 ? console.log('You are old enough to drive.') : console.log(`You are left with ${18 - age} years to drive..`)

// 2) Compare the values of myAge and yourAge using if … else. 
// Based on the comparison and log the result to console stating 
// who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// const myAge = 35
// let yourAge = prompt('what is your age')

// if (myAge > yourAge) {
//     console.log(`You are ${myAge - yourAge} years younger than me.`)
// } else {
//     console.log(`You are ${yourAge - myAge} years older than me.`)
// }

// 3)  If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways

let a = 4
let b = 3

if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else {
    console.log(`${b} is greater than ${a}`)
}

a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greater than ${a}`)

// 4) Even numbers are divisible by 2 and the remainder is zero.
//  How do you check, if a number is even or not using JavaScript?

// let num = prompt('write some number')

// num % 2 ? console.log(`${num} is not even number`) : console.log(`${num} is even number`)


// ============================= level 2 ================================================//

// 1) Write a code which can give grades to students according to theirs scores:


// let studentScore = prompt('write some number from 0 to 100')

// switch (true) {
//     case studentScore >= 80:
//       console.log('that is an A')
//       break
//     case studentScore >= 70 && studentScore < 80:
//       console.log('that is an B')
//       break
//     case studentScore >= 60 && studentScore < 70:
//       console.log('that is an C')
//       break
//     case studentScore >= 50 && studentScore < 60:
//       console.log('that is an D')
//       break
//     case studentScore <= 49:
//       console.log('Student did not pass, that is an F')
//       break
//     default:
//       console.log('Entered value was not a number')
//   }

// 2) Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

const autumn = ['september', 'october', 'november']
const winter = ['december', 'january', 'february']
const spring = ['march', 'april', 'may']
const summer = ['june', 'july', 'august']

// const month = prompt('what month is now').toLowerCase()

// switch (true) {
//     case autumn.includes(month):
//       console.log('the season is Autumn.')
//       break
//     case winter.includes(month):
//       console.log('the season is Winter.')
//       break
//     case spring.includes(month):
//       console.log('the season is Spring.')
//       break
//     case summer.includes(month):
//       console.log('the season is Summer.')
//       break
//     default:
//       console.log('Entered value was not a month')
//   }


 // 3) Check if a day is weekend day or a working day. Your script will take day as an input.

//  const weekend = ['saturday', 'sunday']
//  const workday = ['monday', 'thursday', 'wednesday', 'thursday', 'friday']

//  const day = prompt('what month is now').toLowerCase()

//  switch (true) {
//     case weekend.includes(day):
//       console.log(`${day} is weekend`)
//       break
//     case workday.includes(day):
//       console.log(`${day} is workday.`)
//       break
//     default:
//       console.log('Entered value was not a day')
//   }

// ============================= level 3 ================================================//

// 1) Write a program which tells the number of days in a month.
// Write a program which tells the number of days in a month, now consider leap year.

const bigMonth = ['january', 'march','may', 'july', 'august', 'october', 'december']
const medMonth = ['april', 'june', 'september', 'november']
const feb = ['february']
const now = new Date()
const febDays = now.getFullYear() % 4 ? 28 : 29

const month = prompt('what month is now').toLowerCase()
const monthCapitalized = month.charAt(0).toUpperCase() + month.slice(1)


switch (true) {
    case bigMonth.includes(month):
      console.log(`${monthCapitalized} has 31 days`)
      break
    case medMonth.includes(month):
      console.log(`${monthCapitalized} has 30 days`)
      break
    case feb.includes(month):
      console.log(`${monthCapitalized} has ${febDays} days`)
      break
    default:
      console.log('Entered value was not a month')
  }
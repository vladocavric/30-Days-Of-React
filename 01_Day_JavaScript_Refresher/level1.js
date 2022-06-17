import countries from './countries.js'
import technologies from './technologies.js'
import contArr from './contArr.js'
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

  console.log(countries.sort())
  console.log(technologies.sort())


const newArr2 = []


  // done
// Declare an empty array;
const arr1 = Array()
const arr2 = []
console.log(arr1, arr2)
  // done
// Declare an array with more than 5 number of elements
const newArr = Array(5).fill(5)
  // done
// Find the length of your array
console.log(newArr.length)
  // done
// Get the first item, the middle item and the last item of the array
console.log(newArr[0], newArr[3], newArr[newArr.length - 1])
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. 
// The array size should be greater than 5
const mixedDataTypes = [1, 'aaa', null, undefined, true, false, [], {}]
console.log(mixedDataTypes.length)
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon',]
// Print the array using console.log()
console.log(itCompanies)
// Print the number of companies in the array
console.log(itCompanies.length)
// Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[3], itCompanies[itCompanies.length - 1])
// Print out each company
itCompanies.forEach(company => console.log(company))
// Change each company name to uppercase one by one and print them out
itCompanies.forEach(company => console.log(company.toUpperCase()))
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const arrToString = itCompanies.join(', ')
const restOfSentence = 'are big IT companies.'
console.log(`${arrToString} ${restOfSentence}`)
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if(itCompanies.includes('Netflix')) {
    console.log('Netflix')
} else {
    console.log('company is not found')
}
if(itCompanies.includes('Amazon')) {
    console.log('Amazon')
} else {
    console.log('company is not found')
}
// TODO: Filter out companies which have more than one 'o' without the filter method

// Sort the array using sort() method
// console.log(itCompanies.sort())
// Reverse the array using reverse() method
// console.log(itCompanies.reverse())
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 4))
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(3, 7))
// Slice out the middle IT company or companies from the array
let arrConcat = []
console.log(arrConcat.concat(itCompanies.slice(0, 4), itCompanies.slice(4, 7)))
// Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies)
// Remove the middle IT company or companies from the array
itCompanies.splice(3, 1);
console.log(itCompanies)
// Remove the last IT company from the array
itCompanies.pop()
console.log(itCompanies)
// Remove all IT companies
console.log(itCompanies.splice())

// ============================= level 2 ================================================//


let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.replaceAll(',', '').replaceAll('.', '').split(' ')
console.log(words)
console.log(words.length)


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
shoppingCart.splice(3, 1, 'Green Tea')
shoppingCart.splice(4, 1)
console.log(shoppingCart)

if(countries.includes('Ethiopia')) {
    console.log('ETHIOPIA')
} else {
    countries.push('Ethiopia')
}
if(technologies.includes('Sass')) {
    console.log('Sass is a CSS preprocess')
} else {
    technologies.push('Sass')
}

// console.log(technologies)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)

// ============================= level 3 ================================================//

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// 1) Sort the array and find the min and max age 

ages.sort()
console.log(ages)

const min = Math.min(...ages)
console.log(min)
const max = Math.max(...ages)
console.log(max)

// 2) Find the median age(one middle item or two middle items divided by two)

if(!(ages.length % 2)) {
    const index2 = ages.length / 2
    const median = (ages[index2] + ages[index2 - 1]) / 2
    console.log('median for even: ', median)
} else {
    const index = Math.floor(ages.length / 2)
    const median = ages[index]
    console.log('median for odd: ',median)
}
// 3) Find the average age(all items divided by number of items)
const sum = ages.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
const average = sum / ages.length
console.log(average)
// 4) Find the range of the ages(max minus min) 
const range = max - min
console.log(range)
// 5) Compare the value of (min - average) and (max - average), use abs() method
const minAverage = Math.abs(min - average)
const maxAverage = Math.abs(max - average)
console.log(minAverage, maxAverage)

// 6) Slice the first ten countries from the countries array

console.log(contArr.slice(10))
// 7) Find the middle country(ies) in the countries array

const middleCountries = contArr.length % 2 ? 
  contArr[Math.floor(contArr.length / 2)] : [contArr[(contArr.length / 2)], contArr[(contArr.length / 2) - 1]]
console.log(middleCountries)
// 8) Divide the countries array into two equal arrays if it is even. 
// If countries array is not even , one more country for the first half.
const twoArrCountries = contArr.length % 2 ? 
  [[contArr.slice(0, Math.ceil(contArr.length / 2))], [contArr.slice(Math.ceil(contArr.length / 2))]] : 
  [[contArr.slice(0, contArr.length / 2)], [contArr.slice(contArr.length / 2)]]

console.log(twoArrCountries)
import users from './users.js'
// ============================= level 1 ================================================//
// Create an empty object called dog

const dog = {}


// Print the the dog object on the console
console.log(dog)
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Dzeki'
dog.legs = 4
dog.colors = ['yellow', 'black']
dog.age = 5
dog.bark = function() {
    return 'woof woof'
}
console.log(dog)
console.log(dog.bark())
// Get name, legs, color, age and bark value from the dog object
console.log(dog.name, dog.legs, dog.colors, dog.age)
// Set new properties the dog object: breed, getDogInfo
dog.bread = 'Belarus Shepard'
dog.getDogInfo = function() {
    const colors = this.colors.toString()
    return `this is ${this.name}, he is ${this.age}, his colors are ${colors} and he goes ${this.bark()}`
}

console.log(dog.getDogInfo())

// ============================= level 2 ================================================//

// Find the person who has many skills in the users object.
const usersArr = []
for (const user in users) {
    console.log(users[user])
    users[user].name = user
    usersArr.push(users[user])
}
console.log(usersArr)

let usersWithManySkills = []
let usersWithManySkillsObjs = [] //the user with more than five skills
usersWithManySkillsObjs = usersArr.filter(user => user.skills.length > 5)
for (const user of usersWithManySkillsObjs) {
    usersWithManySkills.push(user.name)
}

console.log(usersWithManySkills)


// Count logged in users,count users having greater than equal to 50 points from the following object.
let count = 0
for (const user of usersArr) {
    if (user.isLoggedIn) {
        count++
    }
}

console.log(count)

// Find people who are MERN stack developer from the users object


// usersArr.filter(user => {
//     // const lowerSkills = user.skills.map(skill => skill.toLowerCase())
//     // console.log('lower skill',lowerSkills)
//     // return lowerSkills.includes('mongodb')
//     return user.isLoggedIn
// })

const mernUsers = usersArr.filter(user =>  {
    return  user.skills.includes('React') && user.skills.includes('MongoDB') && user.skills.includes('Express') && user.skills.includes('Node')
})

console.log('filterd users', mernUsers)

// Set your name in the users object without modifying the original users object

// Get all keys or properties of users object

// console.log(Object.keys(users))

// Get all the values of users object

// console.log(Object.values(users))

// Use the countries object to print a country name, capital, populations and languages.
// ============================= level 3 ================================================//

// Create an object literal called personAccount. 
// It has firstName, lastName, incomes, expenses properties 
//and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
//Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {  
    firstName: '',  
    lastName: '',
    incomes: [],
    expenses: [],
    totalIncome: 0,
    totalExpense: 0,
    accountInfo() {
        return `${this.firstName} ${this.lastName} has ${this.totalIncome} and ${this.totalExpense}`
    },
    addIncome: function(income, description) {
        this.incomes.push({income, description})
        this.totalIncome += income
    },
    addExpense(expense, description) {
        this.expenses.push({expense, description})
        this.totalExpense += expense
    },
    accountBalance() {
        return this.totalIncome - this.totalExpense
    }
}




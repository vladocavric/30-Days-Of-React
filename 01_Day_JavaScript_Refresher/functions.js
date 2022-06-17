const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

const sumNumbers = (a, b) => a + b;
const _areaOfCircle = (radius) => Math.PI * radius * radius;
const convertCelsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
const convertFahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
const bmi = (weight, height) => {
	const bmiIndex = weight / (height * height);
	if (bmiIndex < 18.5) {
		return 'Underweight';
	} else if (bmiIndex < 25) {
		return 'Normal';
	} else if (bmiIndex < 30) {
		return 'Overweight';
	} else {
		return 'Obese';
	}
};

/**
 * It takes a number as an argument and returns a string that tells you what season it is
 * @param month - The month of the year, as an integer between 1 and 12.
 * @returns The season that corresponds to the month that is passed in.
 */
const checkSeason = (month) => {
    if (month === 3 || month === 4 || month === 5) {
        return 'Spring';
    } else if (month === 6 || month === 7 || month === 8) {
        return 'Summer';
    } else if (month === 9 || month === 10 || month === 11) {
        return 'Fall';
    } else if (month === 12 || month === 1 || month === 2) {
        return 'Winter';
    } else {
        return 'Invalid month';
    } 
}

const solveQuadratic = (...args) => {
//  return (args[0] * x * x) + (args[1] * x) + args[2];
    const a = args[0];
    const b = args[1];
    const c = args[2];
    const d = b * b - 4 * a * c;
    if (d < 0) {
        return 'No solution';
    }
    if (d === 0) {
        return -b / (2 * a);
    }
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    return `x1 = ${x1}, x2 = ${x2}`;

  
}

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}

const printArray = (array) => {
    for (const number of array) {
        console.log(number);
    }
}   // printArray([1, 2, 3, 4, 5])

const showDateTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

// Declare a function name swapValues. This function swaps value of x to y.
const swapValues = (x, y) => {
    const temp = x;
    x = y;
    y = temp;
}


const reverseArray = (array) => {
    const reversedArray = [];
    for (let item of array) {
        reversedArray.push(item);
    }
    return reversedArray;
}

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
const addItem = (item) => {
    const array = [];
    array.push(item);
    return array;
}
    
// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an ite
const removeItem = (index) => { 
    const array = [];
    array.splice(index, 1);
    return array;
}

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number
const evensAndOdds = (number) => {
    const evens = 0;
    const odds = 0;
    for (let i = 1; i <= number; i++) {
        if (i % 2 === 0) {
            evens++;
        } else {
            odds++;
        }
    }
    return `Evens: ${evens}, Odds: ${odds}`;
}
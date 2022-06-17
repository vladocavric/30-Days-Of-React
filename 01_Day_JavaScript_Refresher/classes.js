class Animals {
	constructor(name, age, color, legs) {
		this.name = name;
		this.age = age;
		this.color = color;
		this.legs = legs;
	}

	getName() {
		return `I am ${this.name}`;
	}
}

class Dog extends Animals {
	constructor(name, age, color, legs, breed) {
		super(name, age, color, legs);
		this.breed = breed;
	}
	getName() {
		return `I am ${this.name} and I am a ${this.breed}`;
	}
}
class Cat extends Animals {}

class Statistics {
	constructor(arr) {
		this.arr = arr;
	}
	count() {
		return this.arr.length;
	}
	sum() {
		return this.arr.reduce((a, b) => a + b);
	}
	min() {
		return Math.min(...this.arr);
	}
	max() {
		return Math.max(...this.arr);
	}
	median() {
		let sorted = this.arr.sort((a, b) => a - b);
		if (sorted.length % 2 === 0) {
			return (
				(sorted[sorted.length / 2] + sorted[sorted.length / 2 - 1]) / 2
			);
		} else {
			return sorted[Math.floor(sorted.length / 2)];
		}
	}

	mode() {
		let obj = {};
		this.arr.forEach((item) => {
			if (obj[item]) {
				obj[item]++;
			} else {
				obj[item] = 1;
			}
		});
		let max = 0;
		let mode = 0;
		for (let key in obj) {
			if (obj[key] > max) {
				max = obj[key];
				mode = key;
			}
		}
		return mode;
	}
	mean() {
		return this.sum() / this.count();
	}
    var() { 
        return this.arr.reduce((a, b) => a + b) / this.count();
    }
    std() {
        let mean = this.mean();
        let sum = 0;
        this.arr.forEach((item) => {
            sum += Math.pow(item - mean, 2);
        }
        );
        return Math.sqrt(sum / this.count());
    }
    freqDist() {
        let obj = {};
        this.arr.forEach((item) => {
            if (obj[item]) {
                obj[item]++;
            } else {
                obj[item] = 1;
            }
        }
        );
        return obj;
    }
    range() {
        return this.max() - this.min();
    }
}


const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = new Statistics(ages);


console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Frequency Distribution: ',statistics.freqDist())
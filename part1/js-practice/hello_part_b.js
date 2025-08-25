console.log("Learning the basis and const vs let")
// const vs let and basics
const x = 3;
let y = 5;
console.log(x,y)

y = "changed the value of y"
console.log(x,y)

// x = 5 // This would cause an error

// Arrays
console.log("Moving on to arrays:")
const t = [1, -1, 3]

t.push(5)

console.log(t.length)
console.log(t[1])

t.forEach(value => {
    console.log(value)
})

const t2 = t.concat(5)

console.log(t)
console.log(t2)

const t3 = [1,2,3]

const m1 = t3.map(value => value * 2)
console.log(m1)

const m2 = t3.map(value => '<li>' + value + '</li>')
console.log(m2)

const t4 = [1,2,3,4,5]

const [first, second, ...rest] = t4

console.log(first, second)
console.log(rest)

// Objects
console.log("Moving on to objects")

const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
}

const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const object3 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}

console.log(object1.name)
console.log(object1['age'])

// Functions
console.log("Moving onto functions: ")

const sum = (p1,p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

const result = sum(1,5)
console.log(result)

const square = p => {
    console.log(p)
    return p*p
}

const square_one_line = p => p * p // so this is what is happening when you hit something like map. You are giving it a function for it to apply to each entry in the iterable

const average = function(a,b) {
    return (a+ b) / 2
}

const resultAverage = average(2,5)
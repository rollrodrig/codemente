// regular function
function addFiveToNumber(a) {
	return a + 5
}
const res = addFiveToNumber(5)
console.log(res) // 10

// arrow function
const addFiveToNumber2 = a =>  a + 5
const res2 = addFiveToNumber2(5)
console.log(res2) // 10

// return object
const getUser = id =>  ({name: 'pacman', city: 'new york' })
const user = getUser(1)
console.log(user)

const getUser2 = id =>  ({
	name: 'pacman',
	city: 'new york' 
})
const user2 = getUser2(1)
console.log(user2)

const addAgeToName = function(age) {
	return function(name) {
		return name + " tiene "+ age
	}
}
const f = addAgeToName(5)
console.log(f("pacman"))

const addAgeToName2 = age => name => name + " tiene "+ age
const f2 = addAgeToName2(5)
console.log(f2("pacman"))


const addAgeToName3 = age => name => city => name + " tiene "+ age + " vive "+ city
const res3 = addAgeToName3(5)("pacman")("new york")
console.log(res3)
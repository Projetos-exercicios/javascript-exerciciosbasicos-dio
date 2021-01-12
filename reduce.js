// JavaScript source code

// JavaScript source code
const pets = [
	{
		name: 'rex',
		type: 'dog',
		age:  10
	},
	{
		name: 'miau',
		type: 'cat',
		age:  2
	},
	{
		name: 'gulp',
		type: 'fish',
		age:  1
	}
]

const totalAge = pets.reduce((total,pet)=>{
	console.log(`Total: ${total}`)
	console.log(`Pet: ${pet.name}`)
	return total + pet.age
},0)


console.log(`totalAge: ${totalAge}`)



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

const mapPetNames = pets.map((pet)=>{
	return pet.name
})


const petNames = []
pets.forEach((pet)=>{
	petNames.push(pet.name)
})

console.log(pets)
console.log(mapPetNames)
console.log(petNames)

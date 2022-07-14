
// let person = {
// name: 'Alicia',
// lastName: 'Myrie',
// age: 32,
// inClass: true,
// classesTaught: [ 'Cooking', 'Photography ']
// }

// const allProps = Object.keys(person)
// console.log(allProps)
// const hasAge = allProps.indexOf("age") > -1
// console.log(hasAge)

// person.name = "Lisa" // how we edit
// person.hasGlasses = true // how we add a new property
// console.log(person)

// person.age = 21
// console.log(person)

// console.log(person.name)
// console.log(person['name'])

// let {name,age} = person
// console.log(name)
// console.log(age)


// console.log(person)
// console.log(person.name) 
// person.name = 'Alicia'
// console.log(person.name)


//ask about the delete
// console.log(person)
// console.log(person.name) 
// person.name = 'Alicia'
// console.log(person.name)

// Lab 1 - Object

// Create an object that will include a student's info with the following values:
// - Name (with your own name)
// - Age (with any age)
// - inClass (having a boolean value stating if you're in class or not)

// Now do the following with the oject:
// - Display the object to the user (on the screen)
// - Display just the name of the student variable 
// - Change "Age" another number.
// - Display the student's Age 

// let person = {
//  name: "Alicia",
//  age: 32,
//  inClass: true
// }
// console.log(person)
// console.log(person.name)

// person.age = 28
// console.log(person.age)

// Lab 2

// Create an object for a "Teacher" with the following properties
// - Name (with anyone's name)
// - Classes (with an empty array)
// - currentlyTeaching (true or false, your choice)

// Now with the above object do the following:
// - Add a new class name (of your choice) to the "Classes" array 
// - Add another class.
// - Display the Teacher's Name
// - Display the Teacher's Classes
// - Display the full Teacher Object

// let teacher = {
//     name: "Thomas",
//     classes: [],
//     currentlyTeaching: false
// }
// console.log(teacher.currentlyTeaching)

// let teacher = {
//     name: "Thomas",
//     classes: [],
//     currentlyTeaching: false,
// }
// teacher.classes.push("Music");
// console.log(teacher)
// console.log(teacher.name)
// console.log(teacher.classes)
// console.log(teacher)


// Lab 3 - Object

// Create an object for a "TeacherAssistant" with the following properties
// - Name 
// - inClass (with true or false)

// Now with the above object do the following:
// - Display the TeacherAssistant object
// - Add a new "property" called "Classes" with an empty array.
// - Add a new class name (just string) to the newly added property
// - Display the TeacherAssistant Object.

let TeacherAssistant = {
    Name: "Linda",
    inClass: true,
}
console.log(TeacherAssistant)
TeacherAssistant.Classes = []
TeacherAssistant.Classes.push("Pottery")
console.log(TeacherAssistant)
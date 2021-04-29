class student {
	fullName: string
	constructor(public firstName: string, public middleInitial: string, public lastName: string) {
		this.fullName = firstName + middleInitial + lastName
	}
}

interface Person {
	firstName: string
	lastName: string
}

function greeter(person: Person) {
	return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let user = new student('Jane', 'M.', 'User')

document.body.textContent = greeter(user)
const data = [{
	id: 1,
	first_name: 'John',
	last_name: 'Smith',
	age: 35,
	birth_date: '',
	created_on: ''
},{
	id: 2,
	first_name: 'Georgi',
	last_name: 'Ivanov',
	age: 35,
	birth_date: '',
	created_on: ''
},{
	id: 3,
	first_name: 'Alexander',
	last_name: 'Alexandrov',
	age: 35,
	birth_date: '',
	created_on: ''
},{
	id: 4,
	first_name: 'Lionel',
	last_name: 'Messi',
	age: 35,
	birth_date: '',
	created_on: ''
},{
	id: 5,
	first_name: 'Gianluigi',
	last_name: 'Buffon',
	age: 35,
	birth_date: '',
	created_on: ''
}]


class FindElement {
    constructor(data) {
        this.data = data;
    }

    findElementById(id) {
        console.log(this.data.filter(data => data.id === id));

    }

    findIndexOfEleByArgument(arg) {
        console.log(this.data.findIndex(data => data['first_name'] === arg))
    }
    findIdbyEleName(name) {
        console.log(this.data.find(data => data['first_name'] === name).id)
    }
}


const test = new FindElement(data);

test.findElementById(3)
test.findIndexOfEleByArgument('Alexander')
test.findIdbyEleName('Georgi')
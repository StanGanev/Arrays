const data = [{
	id: 1,
	first_name: 'John',
	last_name: 'Smith',
	age: 35,
	birth_date: '',
	created_on: ''
}, {
	id: 2,
	first_name: 'Georgi',
	last_name: 'Ivanov',
	age: 35,
	birth_date: '',
	created_on: ''
}, {
	id: 3,
	first_name: 'Alexander',
	last_name: 'Alexandrov',
	age: 35,
	birth_date: '',
	created_on: ''
}, {
	id: 4,
	first_name: 'Lionel',
	last_name: 'Messi',
	age: 35,
	birth_date: '',
	created_on: ''
}, {
	id: 5,
	first_name: 'Gianluigi',
	last_name: 'Buffon',
	age: 35,
	birth_date: '',
	created_on: ''
}]

class ChangeStructure {
	constructor(data) {
		this.data = data;
	}

	changeStructure() {
		this.data.map(
			data => {
				const fullName = `${data['first_name']} ${data['last_name']}`
				Object.assign(data,
					{
						firstName: data['first_name'],
						lastName: data['last_name'],
						fullName,
						age: data.age,
						birthDate: data['birth_date'],
						createdOn: data['created_on'] })
				delete data.first_name;
				delete data.last_name;
				delete data.birth_date;
				delete data.created_on;
			}
		)
		console.log(this.data);
	}
}

const test = new ChangeStructure(data);

test.changeStructure();
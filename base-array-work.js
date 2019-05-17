const data = [{
	id: 1,
	type: 'profit',
	description: 'Some stuff',
	amount: 95,
	date: new Date()
},{
	id: 2,
	type: 'cost',
	description: 'Some stuff',
	amount: 15,
	date: new Date()
},{
	id: 3,
	type: 'cost',
	description: 'Some stuff',
	amount: 13,
	date: new Date()
},{
	id: 4,
	type: 'profit',
	description: 'Some stuff',
	amount: 28,
	date: new Date()
},{
	id: 5,
	type: 'cost',
	description: 'Some stuff',
	amount: 37,
	date: new Date()
},{
	id: 6,
	type: 'profit',
	description: 'Some stuff',
	amount: 42,
	date: new Date()
}];

export class BaseArrayWork {
    constructor(data) {
        this.data = data;
    }

    addToEnd(element) {
        this.data.push(element)
    }

    addToStart(element) {
        this.data.unshift(element)
    }

    removeRandomElement() {
        let numberToRoll = this.data.length;
        let randomRoll = Math.floor(Math.random(numberToRoll)) - 1;
        this.data.slice(randomRoll);
    }

    getLast() {
        return element = this.data.pop();
    }

    getFirst() {
        return element = this.data.shift();
    }
}

const test = new BaseArrayWork(data);


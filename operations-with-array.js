const data = [{
    id: 1,
    type: 'profit',
    description: 'Some stuff',
    amount: 95,
    date: new Date()
}, {
    id: 2,
    type: 'cost',
    description: 'Some stuff',
    amount: 15,
    date: new Date()
}, {
    id: 3,
    type: 'cost',
    description: 'Some stuff',
    amount: 13,
    date: new Date()
}, {
    id: 4,
    type: 'profit',
    description: 'Some stuff',
    amount: 28,
    date: new Date()
}, {
    id: 5,
    type: 'cost',
    description: 'Some stuff',
    amount: 37,
    date: new Date()
}, {
    id: 6,
    type: 'profit',
    description: 'Some stuff',
    amount: 42,
    date: new Date()
}];




class OperationsWithArray {
    constructor(data) {
        this.data = data;
        this.totalExpence = 0;
        this.totalIncome = 0;
        this.onlyIncome = [];
        this.onlyExpence = [];
    }


    showData() {
        console.log(this.data)
    }

    calcExpenses() {
        return this.totalExpence = this.data
            .filter(curentData => curentData.type === 'cost')
            .reduce((pValue, curentData) => pValue + curentData.amount, 0)
    }

    calcIncome() {
        return this.totalIncome = this.data
            .filter(curentData => curentData.type === 'profit')
            .reduce((pValue, curentData) => pValue + curentData.amount, 0)

    }

    filterExpenceAndIncome(keyword) {
        if (keyword === 'cost') {
            console.log(this.onlyExpence = this.data.filter(curentData => curentData.type === 'cost'))
            return this.onlyExpence;
        } else if (keyword === 'profit') {
            console.log(this.onlyIncome = this.data.filter(curentData => curentData.type === 'profit'))
            return this.onlyIncome
        }
    }

    showTotalExpences() {
        console.log(this.totalExpence)
    }

    showTotalIncome() {
        console.log(this.totalIncome)
    }
}

const test = new OperationsWithArray(data);

//test.showData();
test.calcExpenses();
test.calcIncome();
test.showTotalExpences();
test.showTotalIncome();
test.filterExpenceAndIncome('profit');
// test.filterExpenceAndIncome('cost');


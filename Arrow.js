class Person {
    constructor(name) {
        this.name = name
    }

    printNameArrow() {
        setTimeout(()=> {
            console.log(this.name)
        }, 100)
    }

    printNameFunction() {
        setTimeout(function() {
            console.log(this.name)
        }, 100)
    }

}

const person = new Person('Malli')
person.printNameArrow()
person.printNameFunction()

class  Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        // return 'Hi. I am ' + this.name + '!';
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let description = super.getGreeting();
        if (this.hasLocation()) {
            description += ` I'm visiting from ${this.homeLocation}.`;
        }
        return description;
    }
}

const me = new Student('Andrew Mead', 28, 'Computer Science');
console.log(me.getDescription());

const chris = new Traveller('Chris', 31, 'Sydney');
console.log(chris.getGreeting());

const other = new Student();
console.log(other);

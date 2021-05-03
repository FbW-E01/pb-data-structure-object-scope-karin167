// //1+2 
const student = {
    firstName: 'karin',
    lastName: 'yahud',
    class: 12,
    foo: function() { console.log(this.firstName,this.lastName, "is a student in class", this.class); }
};
student.foo();




//3+ Bunus
const person = {

    firstName: 'John',
    lastName: 'Smith',
    age: 41,
    job: 'engineer',
    city: 'France',
    properties: function () {
		return (
			this.firstName +
			" " +
			this.lastName +
			" is a " +
			this.age +
			" year old " +
			this.job +
			" living in " +
			this.city
		);
	},
	getTheLength: function () {
        let number = 0; 
        for (const key in this){
            number++
        }
        return number;
	},
}

person.properties();
console.log(person.getTheLength());




		// return Object.keys(this).length;


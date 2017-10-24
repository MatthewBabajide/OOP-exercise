class Employee {
    constructor(firstName, lastName, pay) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.pay = pay;
    }
    getfullName() {
        return `${this._firstName} ${this._lastName}`;
    }
    getapplyRaise() {
      let raiseAmount = 1.8
      return this._pay * raiseAmount;     
    }
}
class Manager extends Employee {
     constructor(firstName, lastName, pay, sex){
       super(firstName, lastName, pay);
       this.sex = sex;
    }
    getfullName() {
      return `${this._firstName} ${this._lastName}`;
    }
    getapplyRaise() {
      let raiseAmount=2
      return this._pay * raiseAmount ;     
    }
}
const emp1 = new Employee ("Kev", "Eji", 1000)
console.log (emp1)
emp1.getfullName()
emp1.getapplyRaise()
const man = new Manager ("Ngo", "Sha", 2000, "female")
man.getfullName()
man.getapplyRaise()
console.log (man)
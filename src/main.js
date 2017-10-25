/**
 * @class Employee
 */
class Employee {
  /**
   * Creates an instance of Employee.
   * @param {Number} salary
   * @param {Number} bonus
   * @memberof Employee
   */
  constructor(salary, bonus) {
    this.salary = salary;
    this.bonus = bonus;
  }
  /**
   * @returns {Number} getSalary
   *
   * @memberof Employee
   */
  getSalary() {
    console.log(`salary = ${this.salary}`);
  }
  /**
   * @returns {Number}getapplyRaise
   * @memberof Employee
   */
  getapplyRaise() {
    const bonusFactor = 1.8;
    console.log(`Bonus = ${this.bonus * bonusFactor}`);
  }
}
/**
 * @class Manager
 * @extends {Employee}
 */
class Manager extends Employee {
  /**
   * Creates an instance of Manager.
   * @param {Number} salary
   * @param {Number} bonus
   * @memberof Manager
   */
  /**
 *@returns {Number} getapplyRaise
 *
 * @memberof Manager
 */
  getapplyRaise() {
    const bonusFactor = 5;
    console.log(`Bonus = ${this.bonus * bonusFactor}`);
  }
}
/**
 * @class Cleaner
 * @extends {Employee}
 */
class Cleaner extends Employee {
  /**
   * Creates an instance of Cleaner.
   * @param {Number} salary
   * @param {Number} bonus
   * @param {Number} name
   * @memberof Cleaner
   */
  constructor(salary, bonus, name) {
    super(salary, bonus);
    this.name = name;
  }
  /**
   * @return {String} getName
   *
   * @memberof Cleaner
   */
  getName() {
    console.log(`Cleaner name: ${this.name}`);
  }
}

man.getapplyRaise();
man.getSalary();

export { Employee, Manager, Cleaner };

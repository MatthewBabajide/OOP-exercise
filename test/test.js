import { assert } from 'chai';
import { Employee, Manager, Cleaner } from '../src/main';


const cln = new Cleaner(1000, 1000, 'July');
const man = new Manager(2000, 2000);
const woman = new Employee(4000, 1000);

console.log('man is ', man);

describe('Bonus at month end ', () => {
  describe('Bonus at month end for Cleaner', () => {
    it('should return Bonus = 1800 ', () => {
      assert.equal(cln.getapplyRaise(), 'Bonus = 1800');
    });

    it('should return salary = 1000', () => {
      assert.equal(cln.getSalary(), 'salary = 1000');
    });

    it('should return Cleaner name: July', () => {
      assert.equal(woman.getName(), 'Cleaner name, July');
    });

    it('should return salary = 4000 ', () => {
      assert.equal(woman.getSalary(), 'salary = 4000');
    });

    it('should return Bonus = 1800 ', () => {
      assert.equal(woman.getapplyRaise(), 'Bonus = 1800');
    });
    it('should return salary = 2000 ', () => {
      assert.equal(man.getSalary(), 'salary = 2000');
    });

    it('should return Bonus = 10000 ', () => {
      assert.equal(man.getapplyRaise(), 'Bonus = 10000');
    });
  });
});

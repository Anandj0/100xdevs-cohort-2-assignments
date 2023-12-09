/*
  Implement a class `Calculator` having below methods
    - initialise a this.result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the this.result
    - subtract: takes a number and subtracts it from the this.result
    - multiply: takes a number and multiply it to the this.result
    - divide: takes a number and divide it to the this.result
    - clear: makes the `this.result` variable to 0
    - getResult: returns the value of `this.result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its this.result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {

  result;

  constructor(){
    this.result=0;
  }

  add(num){
    this.result += num;
  }

  subtract(num){
    this.result -= num;
  }

  multiply(num){
    this.result *= num;
  }

  divide(num){
    if(num==0){
      throw new Error('divide by zero error')
    }
    this.result /= num;
  }

  clear(){
    this.result = 0;
  }
  getResult(){
    return this.result;
  }

  calculate(expression){

    expression = expression.replace(' ','');
    this.result = eval(expression)
    
    if(isNaN(this.result) || !isFinite(this.result)){
      throw new Error("Invalid expression");
    }
  }
}

module.exports = Calculator;

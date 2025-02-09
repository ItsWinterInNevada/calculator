const numInputBtn = document.querySelectorAll(`.num`);
const plusBtn = document.querySelector(`.plus`);
const minusBtn = document.querySelector(`.minus`);
const multiplyBtn = document.querySelector(`.multiply`);
const divideBtn = document.querySelector(`.divide`);
const evaluateBtn = document.querySelector(`.equals`);
const resetBtn = document.querySelector(`.reset`);

let input = [0]; // 0 fixes typeError from first result being undefined by default when reducing.
let currentOperator = `+`;

const operators = {
  plus: `+`,
  minus: `-`,
  multiply: `*`,
  divide: `/`,
};

resetBtn.addEventListener(`click`, () => {
  reset();
});

const reset = () => {
  input = [0];
  currentOperator = null;
  console.log(input, currentOperator);
};

const fetchInput = () => {
  numInputBtn.forEach((num) => {
    num.addEventListener(`click`, (event) => {
      if (input.at(0) === 0) {
        input.shift(0);
        input.push(Number(event.target.textContent));
        console.log(input);
      } else {
        input.push(Number(event.target.textContent));
        console.log(input);
      }
    });
  });
};

const evaluateExpression = ({ plus, minus, multiply, divide }) => {
  plusBtn.addEventListener(`click`, () => (currentOperator = plus));
  minusBtn.addEventListener(`click`, () => (currentOperator = minus));
  multiplyBtn.addEventListener(`click`, () => (currentOperator = multiply));
  divideBtn.addEventListener(`click`, () => (currentOperator = divide));

  evaluateBtn.addEventListener(`click`, () => {
    let result = input.reduce((accumulator, currentValue) => {
      if (currentOperator === plus) {
        return accumulator + currentValue;
      }
      if (currentOperator === minus) {
        return accumulator - currentValue;
      }
      if (currentOperator === multiply) {
        return accumulator * currentValue;
      }
      if (currentOperator === divide) {
        return accumulator / currentValue;
      }
    });
    console.log(result);

    input = [result];
    console.log(input);
  });
};

console.log(input);

fetchInput();
evaluateExpression(operators);

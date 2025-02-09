const numInput = document.querySelectorAll(`.num`);
const evaluate = document.querySelector(`.equals`);

const evaluateExpression = () => {
  let input = [0];

  numInput.forEach((num) => {
    num.addEventListener(`click`, (event) => {
      input.push(Number(event.target.textContent));
      console.log(input);
    });
  });

  evaluate.addEventListener(
    `click`,
    () => {
      const result = input.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
      console.log(result);
    },
    0
  );
};

evaluateExpression();

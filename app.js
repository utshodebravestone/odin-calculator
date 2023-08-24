const interactive_buttons = document.querySelectorAll(".interactive");
const displayCurrentExpression = document.querySelector(".current-expression");
const displayPreviousExpression = document.querySelector(
  ".previous-expression"
);
const displayCurrentOperator = document.querySelector(".current-operator");

let currentExpression = "0";
let previousExpression = "0";
let currentOperator = "=";

const reset_display = () => {
  currentExpression = "0";
  previousExpression = "0";
  currentOperator = "=";
};

const render = () => {
  displayCurrentExpression.innerHTML = currentExpression;
  displayPreviousExpression.innerHTML = previousExpression;
  displayCurrentOperator.innerHTML = currentOperator;
};

interactive_buttons.forEach((interactive_button) => {
  interactive_button.addEventListener("click", (e) => {
    let button = e.target.innerText;
    switch (button) {
      case "AC":
        reset_display();
        break;
      case "CLR":
        currentExpression = currentExpression.substring(
          0,
          currentExpression.length - 1
        );
        break;

      case "=":
        console.log(
          `Evaluating '${previousExpression}' '${currentOperator}' '${currentExpression}'`
        );
        switch (currentOperator) {
          case "+":
            currentExpression = (
              parseFloat(previousExpression) + parseFloat(currentExpression)
            ).toString();
            break;
          case "-":
            currentExpression = (
              parseFloat(previousExpression) - parseFloat(currentExpression)
            ).toString();
            break;
          case "*":
            currentExpression = (
              parseFloat(previousExpression) * parseFloat(currentExpression)
            ).toString();
            break;
          case "/":
            if (parseFloat(currentExpression) <= 0) {
              alert(
                `Invalid expression: '${previousExpression} ${currentOperator} ${currentExpression}'`
              );
            } else {
              currentExpression = (
                parseFloat(previousExpression) / parseFloat(currentExpression)
              ).toString();
            }
            break;
          case "%":
            if (parseFloat(currentExpression) <= 0) {
              alert(
                `Invalid expression: '${previousExpression} ${currentOperator} ${currentExpression}'`
              );
            } else {
              currentExpression = (
                parseFloat(previousExpression) / parseFloat(currentExpression)
              ).toString();
            }
            break;

          default:
            alert(
              `Invalid expression: '${previousExpression} ${currentOperator} ${currentExpression}'`
            );
            reset_display();
            break;
        }
        currentOperator = "=";
        previousExpression = currentExpression;
        break;

      case "+":
      case "-":
      case "*":
      case "/":
      case "%":
        previousExpression = currentExpression;
        currentExpression = "0";
        currentOperator = button;
        break;

      default:
        if (currentExpression === "0") {
          currentExpression = button;
        } else {
          currentExpression += button;
        }
        break;
    }
    render();
  });
});

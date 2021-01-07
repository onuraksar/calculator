// window.onload = function() {



const screen = document.querySelector(".screen");
const keypad = document.querySelector(".keypad");

const allDigits = document.querySelectorAll(".digit");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const answerButton = document.querySelector("#answer");
const deleteButton = document.querySelector("#delete");
const fractionButton = document.querySelector("#fraction");
const equalsButton = document.querySelector("#equals");


let data1 = "";
let data2 = "";
let answer = "";
let operation = "";
let isReadyForSecondOperand = false;
let isReadyToClearScreen = false;


allDigits.forEach(digit => digit.addEventListener("click", function() {
  // console.log("digit: ", digit);
  // console.log("html thing: ", screen.innerText);
  // screen.innerText = digit.id;
  // operator1.push(digit.id);
  // screenHolder.push(digit.id);
  if (!isReadyForSecondOperand) {
    clearScreen();
    screen.innerText += digit.id;
    // data1.push(digit.id);
    data1 += digit.id;
    // data1.forEach(item => console.log(item));
    console.log(data1);



  } else {
    console.log("isReadyForSecondOperand in else,", isReadyForSecondOperand);
    screen.innerText += digit.id;
    // data2.push(digit.id);
    data2 += digit.id;
    // data2.forEach(item => console.log(item));
    console.log(data2);
  }

}));

addButton.addEventListener("click", function() {
  screen.innerText += "+";
  operation = "addition";
  isReadyForSecondOperand = true;
  console.log(isReadyForSecondOperand);
});

subtractButton.addEventListener("click", function() {
  screen.innerText += "-";
  operation = "subtraction";
  isReadyForSecondOperand = true;
  console.log(isReadyForSecondOperand);
});

multiplyButton.addEventListener("click", function() {
  screen.innerText += "x";
  operation = "multiplication";
  isReadyForSecondOperand = true;
  console.log(isReadyForSecondOperand);
});

divideButton.addEventListener("click", function() {
  screen.innerText += "÷";
  operation = "division";
  isReadyForSecondOperand = true;
  console.log(isReadyForSecondOperand);
});

answerButton.addEventListener("click", function() {
  screen.innerText = "Ans";
  data1 = answer;
  data2 = "";
  isReadyForSecondOperand = true;
  console.log(isReadyForSecondOperand);
});


equalsButton.addEventListener("click", function() {
  // screen.innerText = data1 + ;
  // console.log("toplamları: ", Number(data1) + Number(data2));
  console.log("this is operation: ", operation);
  switch (operation) {
    case "addition":
      screen.innerText = Number(data1) + Number(data2);
      break;
    case "subtraction":
      screen.innerText = Number(data1) - Number(data2);
      break;
    case "multiplication":
      screen.innerText = Number(data1) * Number(data2);
      break;
    case "division":
      screen.innerText = Number(data1) / Number(data2);
      break;
    default:
      console.log("I am default");
  }

  isReadyForSecondOperand = false;
  isReadyToClearScreen = true;
  answer = screen.innerText; // keep the answer.

});



function clearScreen() {
  if (isReadyToClearScreen) {
    screen.innerText = "";
    data1 = [];
    data2 = [];
    isReadyToClearScreen = false;
  } else return false;
}
// }

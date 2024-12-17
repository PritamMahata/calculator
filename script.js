let historyField = document.getElementById("history");
let resultField = document.getElementById("result");

function clearALl() {
  historyField.value = "";
  resultField.value = "";
}
function deleteLast() {
  historyField.value = "";
}

function appendValue(value) {
  resultField.value += value;
  console.log("hello");
  
}

function calculateResult() {
  try {
    const expression = resultField.value;
    const result = eval(expression);
    historyField.value = expression + " =";
    resultField.value = result;
  } catch (error) {
    resultField.value = "Error";
  }
}

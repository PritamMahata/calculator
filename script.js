let equationField = document.getElementById("equation");
let resultField = document.getElementById("result");

function clearALl() {
  equationField.value = "";
  resultField.value = "";
}
function deleteLast() {
  equationField.value = "";
}

function appendValue(value) {
  equationField.value += value;
  // calculateResult();
}

function calculateResult() {
  try {
    const expression = equationField.value;
    const result = eval(expression);
    resultField.value = result;
  } catch (error) {
    resultField.value = "Error";
  }
}

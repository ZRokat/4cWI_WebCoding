function calculate() {
  var A = parseInt(document.getElementById("number1").value);
  var B = parseInt(document.getElementById("number2").value);
  var operator = parseInt(document.getElementById("operator").value);
  var output = 0;

  switch (operator) {
    case 0:
      output = A + B;
      alert(output);
      document.getElementById("output").innerHTML = output;
      break;
    case 1:
      output = A - B;
      document.getElementById("output").innerHTML = output;
      break;
    case 2:
      output = A * B;
      document.getElementById("output").innerHTML = output;
      break;
    case 3:
      output = A / B;
      document.getElementById("output").innerHTML = output;
      break;
  }
}

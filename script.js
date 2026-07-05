var display = document.getElementById("display");

function press(value) {
  if (display.value === "0") {
    display.value = value;
  } else {
    display.value = display.value + value;
  }
}

function clearDisplay() {
  display.value = "0";
}

function calculate() {
  display.value = eval(display.value);
}

function backspace() {
  display.value = display.value.slice(0, display.value.length - 1);
  if (display.value === "") {
    display.value = "0";
  }
}
function reset() {
  let inputs = document.querySelectorAll(
    'input[type="text"]',
    'input[type="password"]'
  );
  for (let i = 0; (i = inputs.length); i++) {
    inputs[i].value = "";
  }
}

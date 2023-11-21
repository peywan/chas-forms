function reset() {
  let resetField = document.querySelectorAll(
    'input[type="radio"][name="gender"]',
    'input[type="text"][name="username"]'
  );
  for (let i = 0; i < resetField.length; i++) {
    resetField[i].checked = false;
  }
}

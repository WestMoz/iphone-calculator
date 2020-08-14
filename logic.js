const state = {
  val1: '',
  operand: '',
  val2: '',
  decimal: false,
};

function clearButton() {
  state.val1 = '';
  state.operand = '';
  state.val2 = '';
  state.decimal = false;
  document.getElementById('input').value = '';
}

function isOperand(val) {
  return !(typeof val === 'number' || val === '.');
}

function checkDecimal(val) {
  if (val === '.') {
    state.decimal = true;
  }
}

function buttonPressed(val) {
  if (!isOperand(val)) {
    if (!state.operand) {
      if (val === '.' && state.decimal === false) {
        state.decimal = true;
        state.val1 += val;
        document.getElementById('input').value = state.val1;
      } else if (val !== '.') {
        state.val1 += val;
        document.getElementById('input').value = state.val1;
      }
    } else {
      if (val === '.' && state.decimal === false) {
        state.decimal = true;
        state.val2 += val;
        document.getElementById('input').value = state.val2;
      } else if (val !== '.') {
        state.val2 += val;
        document.getElementById('input').value = state.val2;
      }
    }
  } else {
    state.operand = val;
    state.decimal = false;
  }
  console.log(state);
}

function calculate() {
  let result;
  let val1 = Number(state.val1);
  let val2 = Number(state.val2);
  if (state.operand === '+') {
    result = val1 + val2;
  } else if (state.operand === '-') {
    result = val1 - val2;
  } else if (state.operand === 'x') {
    result = val1 * val2;
  } else {
    result = val1 / val2;
  }
  clearButton();
  document.getElementById('input').value = result;

  state.val1 = result;
}

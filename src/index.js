module.exports = function check(str, bracketsConfig) {
  const OPEN_BRACKETS = bracketsConfig.map((item) => item[0]);
  const BRACKETS_PAIR = Object.fromEntries(bracketsConfig.map((item) => [item[1], item[0]]));

  const isBracketsOk = (str) => {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];
      let topElement = stack[stack.length - 1];

      if (
        BRACKETS_PAIR[currentSymbol] !== undefined &&
        OPEN_BRACKETS.includes(currentSymbol) &&
        currentSymbol === topElement
      ) {
        stack.pop();
      } else if (OPEN_BRACKETS.includes(currentSymbol)) {
        stack.push(currentSymbol);
      } else {
        if (stack.length === 0) {
          return false;
        }

        if (BRACKETS_PAIR[currentSymbol] === topElement) {
          stack.pop();
        } else {
          return false;
        }
      }
    }

    return stack.length === 0;
  };

  return isBracketsOk(str);
};

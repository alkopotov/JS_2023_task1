function getNumber(a, b) {
  return Math.floor(Math.random() * (a-b) + b);
}

function getColor(a = 100) {
  return `rgba(${getNumber(256, 0)}, ${getNumber(256, 0)}, ${getNumber(256, 0)}, ${a})`;
}

function getFactorial(num) {
  if (num == 1) {
    return 1;
  }
  return getFactorial(num-1) * num;
}

function getCombination(m, n) {
  if (m <= n) {
    return getFactorial(n) / getFactorial(m) / getFactorial(n - m);
  }
}
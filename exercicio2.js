function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

function checkFibonacci(num) {
  const fib = fibonacci(num);
  return fib.includes(num)
    ? `${num} pertence à sequência de Fibonacci.`
    : `${num} não pertence à sequência de Fibonacci.`;
}

console.log(checkFibonacci(21));
console.log(checkFibonacci(7));

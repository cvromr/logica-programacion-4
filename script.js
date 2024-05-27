//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,...
const fibonacci = (n) => {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }

    return fib;
};

function generateFibonacci() {
    const inputElement = document.getElementById('fibonacciInput');
    const resultElement = document.getElementById('result');
    const inputValue = inputElement.value;

    // Convertir la entrada a número
    const n = parseInt(inputValue, 10);

    // Verificar si la entrada es un número válido
    if (isNaN(n) || n <= 0) {
        alert("Por favor, ingresa un número entero positivo.");
        inputElement.value = '';
        resultElement.textContent = '';
        return;
    }

    // Generar la serie de Fibonacci
    const fibonacciSeries = fibonacci(n);

    // Mostrar el resultado en el DOM
    resultElement.textContent = `Serie de Fibonacci (${n} números): ${fibonacciSeries.join(', ')}`;

    // Mostrar el resultado en la consola
    console.log(`Serie de Fibonacci (${n} números): ${fibonacciSeries.join(', ')}`);
}
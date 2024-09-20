function Fibonacci(num) {
    function sequenciaFibonacci(limite) {
        let sequencia = [0, 1];
        let ProxValor = 0;

        while (ProxValor <= limite) {
            ProxValor = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
            sequencia.push(ProxValor);
        }

        return sequencia;
    }

    let sequencia = sequenciaFibonacci(num);

    if (sequencia.includes(num)) {
        console.log(`O número ${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${num} NÃO pertence à sequência de Fibonacci.`);
    }
}

let verificarNumero = 13;

Fibonacci(verificarNumero);
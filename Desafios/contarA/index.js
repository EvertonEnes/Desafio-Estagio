function contarA(texto) {
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === 'a') {
            contador++;
        }
    }

    if (contador > 0) {
        console.log(`A letra 'a' aparece ${contador} vezes.`);
    } else {
        console.log('Não tem letra "A" nessa frase/palavra');
    }
}

contarA('Qualquer palavra');
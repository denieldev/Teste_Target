let INDICE = 13; // O número final da sequência
let SOMA = 0;    // Variável para armazenar a soma
let K = 0;       // Variável de controle do loop

// Loop para somar os números de 1 a 13
while (K < INDICE) {
    K = K + 1;        // Incrementa K
    SOMA = SOMA + K;  // Soma o valor atualizado de K
}

console.log(SOMA); // Deve exibir 78

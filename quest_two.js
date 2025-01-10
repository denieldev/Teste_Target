function isFibonacci(num) {
  // Inicializa os dois primeiros números da sequência
  let a = 0;
  let b = 1;

  // Verifica se o número informado é 0 ou 1 (pertence à sequência)
  if (num === 0 || num === 1) {
      return `${num} pertence à sequência de Fibonacci.`;
  }

  // Calcula os próximos números da sequência até alcançar ou ultrapassar o número informado
  while (b < num) {
      let temp = b;   // Armazena o valor atual de 'b'
      b = a + b;      // Calcula o próximo número
      a = temp;       // Atualiza 'a' para o próximo número
  }

  // Verifica se o número informado pertence à sequência
  if (b === num) {
      return `${num} pertence à sequência de Fibonacci.`;
  } else {
      return `${num} não pertence à sequência de Fibonacci.`;
  }
}

// Teste o programa com diferentes valores
let numero = 21; // Substitua pelo número que deseja verificar
console.log(isFibonacci(numero));

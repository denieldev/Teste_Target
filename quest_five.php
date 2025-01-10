<?php
// Função para inverter uma string
function inverterString($string) {
    $inverso = ''; // String vazia para armazenar o resultado
    $comprimento = strlen($string); // Obtém o comprimento da string
    
    // Loop que percorre a string do final para o início
    for ($i = $comprimento - 1; $i >= 0; $i--) {
        $inverso .= $string[$i]; // Adiciona o caractere na posição inversa
    }

    return $inverso;
}

// Entrada de string (exemplo "Stranger Things")
$string = "Stranger Things";

// Chama a função para inverter a string e exibe o resultado
$inversao = inverterString($string);
echo "String original: $string\n";
echo "String invertida: $inversao\n";
?>

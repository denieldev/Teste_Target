<?php
// Dados de faturamento mensal por estado
$faturamento = [
    "SP" => 67836.43,
    "RJ" => 36678.66,
    "MG" => 29229.88,
    "ES" => 27165.48,
    "Outros" => 19849.53
];

// Calcula o faturamento total
$total = array_sum($faturamento);

// Calcula e exibe o percentual de cada estado
echo "Percentual de representação por estado:\n";
foreach ($faturamento as $estado => $valor) {
    $percentual = ($valor / $total) * 100;
    echo "$estado: " . number_format($percentual, 2) . "%\n";
}
?>

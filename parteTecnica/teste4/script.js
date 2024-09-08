// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado 
// teve dentro do valor total mensal da distribuidora.  

const faturamento = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
};

//Calcular o valor total de faturamento
let totalFaturamento = 0

// Obter as chaves do objeto
const chaves = Object.keys(faturamento);

// Calcular o valor total
for (let i = 0; i < chaves.length; i++) {
    totalFaturamento += faturamento[chaves[i]];
}

// Calcular e exibir o percentual de representação de cada estado
const percentuais = {};
for (let i = 0; i < chaves.length; i++) {
    const estado = chaves[i];
    percentuais[estado] = (faturamento[estado] / totalFaturamento) * 100;
}

// Exibir os percentuais
let percentuaisTexto = "Percentual de representação por estado:\n";
for (const estado in percentuais) {
    percentuaisTexto += `${estado}: ${percentuais[estado].toFixed(2)}%\n`;
}

// Calcular e exibir a média mensal
const mediaMensal = totalFaturamento / chaves.length;
const mediaTexto = `A média mensal é de: R$ ${mediaMensal.toFixed(2)}`;

// Exibir todos os resultados
alert(percentuaisTexto + "\n" + mediaTexto);
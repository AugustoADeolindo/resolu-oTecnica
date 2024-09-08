// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;


// Função para inverter uma string
function inverterString(str) {
    let resultado = ''; // String para armazenar o resultado
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i]; // Adicionar cada caractere do final para o início
    }
    return resultado;
}

// Pedindo que o usuario digite uma string
const stringOriginal = prompt("Digite uma string para inverter: ")

const stringInvertida = inverterString(stringOriginal)

// Exibir o resultado
alert(`String invertida é: ${stringInvertida}`);
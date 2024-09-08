/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci 
e retorne uma mensagem avisando se o número informado pertence ou não a sequência.*/

//criação das varivaeis nescessarias
let sequencia = [0, 1]
let pertence = false

//criação da variavel para guardar o numero informado
let numeroDigitado = parseInt(prompt("Digite um numero para a sequencia de Fibonacci: "))

//laço de repetição para realizar a sequencia até o numero desejado
for (let i = 0; i <= numeroDigitado; i++) {

    //pega os dois ultimos valores da sequencia e armazena em variaveis
    let numeroA = parseInt(sequencia[(sequencia.length - 2)])
    let numeroB = parseInt(sequencia[(sequencia.length - 1)])

    //adiciona a sequencia a soma dos dois ultimos valores
    sequencia.push(numeroA + numeroB)

    //verifica se o numero digitado pertence a sequencia, se caso pertencer, parar o laço pois o numero já foi comparado
    if ((numeroA + numeroB) == numeroDigitado) {
        pertence = true
        break
        //caso não encontrado, continuar com o valor falso
    } else {
        pertence = false
    }
}

//informar a sequencia até o numero digitado
alert("A sequencia final é: " + sequencia)

//compara se o numero digitado existe na sequencia ou não
if (pertence == true) {
    alert(`O numero ${numeroDigitado} existe na sequencia de Fibonacci!`)
} else {
    alert(`O numero ${numeroDigitado} não existe na sequencia de Fibonacci!`)
}
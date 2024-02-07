alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // Se o chute for igual o número secreto
    if (chute == numeroSecreto) {
        break; 
    } else {
        if (chute > numeroSecreto) {
            alert (`O número secreto é menor que o ${chute}`);
        } else {
            alert (`O número secreto é maior que o ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentavivas' : 'tentativa';
alert (`Isso ai! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

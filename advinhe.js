// Gera um número aleatório entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function adivinhar() {
    const guess = parseInt(document.getElementById('guess').value);
    const mensagem = document.getElementById('mensagem');
    tentativas++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
        mensagem.innerText = "Por favor, insira um número válido entre 1 e 100.";
        return;
    }

    if (guess === numeroAleatorio) {
        mensagem.innerText = `Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`;
    } else if (guess < numeroAleatorio) {
        mensagem.innerText = "O número é maior que " + guess + ". Tente novamente.";
    } else {
        mensagem.innerText = "O número é menor que " + guess + ". Tente novamente.";
    }
}

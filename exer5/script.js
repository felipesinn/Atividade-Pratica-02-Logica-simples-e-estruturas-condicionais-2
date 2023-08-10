const altura = parseFloat(prompt("Digite sua altura (em metros):"));
const peso = parseFloat(prompt("Digite seu peso (em kg):"));

const imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Você está abaixo da faixa de peso ideal.");
} else if (imc >= 18.5 && imc <= 24.99) {
    console.log("Você está dentro da faixa de peso ideal.");
} else {
    console.log("Você está acima da faixa de peso ideal.");
}

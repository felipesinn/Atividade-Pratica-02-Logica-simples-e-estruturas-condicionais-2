const velocidade = parseFloat(prompt("Digite a velocidade do veículo (em Km/h):"));

if (velocidade > 80) {
    const velocidadeExcedida = velocidade - 80;
    const valorMulta = velocidadeExcedida * 5;

    console.log(`Você foi multado por excesso de velocidade.`);
    console.log(`Velocidade excedida: ${velocidadeExcedida.toFixed(2)} Km/h`);
    console.log(`Valor da multa: R$ ${valorMulta.toFixed(2)}`);
} else {
    console.log("Velocidade dentro do limite permitido.");
}



// ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
// multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
// km acima da velocidade permitida.
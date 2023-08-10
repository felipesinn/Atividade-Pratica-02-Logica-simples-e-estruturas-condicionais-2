const percentualDistribuidor = 0.28; 
const percentualImpostos = 0.45;

const custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro:"));
const custoDistribuidor = custoFabrica * percentualDistribuidor;
const custoImpostos = custoFabrica * percentualImpostos;
const custoConsumidor = custoFabrica + custoDistribuidor + custoImpostos;

console.log(`O custo final ao consumidor é: R$ ${custoConsumidor.toFixed(2)}`);



// 4. O custo de um carro novo ao consumidor é a soma do custo de
// fábrica com a porcentagem do distribuidor e dos impostos
// (aplicados ao custo de fábrica). Supondo que o percentual do
// distribuidor seja de 28% e os impostos de 45%, escrever um
// algoritmo para ler o custo de fábrica de um carro,calcular e escrever
// o custo final ao consumidor.
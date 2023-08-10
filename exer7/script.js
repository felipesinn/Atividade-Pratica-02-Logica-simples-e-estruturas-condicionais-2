const saldoInicial = 1000; 
const taxaSaque = 4.50; 

let saldo = saldoInicial;

const valorSaque = parseFloat(prompt("Digite o valor que deseja sacar (múltiplo de 5):"));

if (valorSaque % 5 === 0 && valorSaque <= saldo) {
    const valorTotalSaque = valorSaque + taxaSaque;
    if (valorTotalSaque <= saldo) {
        saldo -= valorTotalSaque;
        console.log(`Saque realizado com sucesso. Saldo restante: R$ ${saldo.toFixed(2)}`);
    } else {
        console.log("Você não possui saldo suficiente para realizar esse saque.");
    }
} else {
    console.log("Valor de saque inválido.");
}



// 7. Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
// a conta do usuário deve ser criada já com um saldo positivo. O
// usuário precisa informar a quantidade de dinheiro que deseja
// retirar, esse valor deve ser um número positivo, múltiplo de 5 e
// menor do que o saldo. Cada saque eletrônico cobra uma taxa de
// R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
// certo com o saque, e se o usuário informar um valor maior que o
// saldo deve ser informado ao usuário que o mesmo não tem dinheiro
// suficiente em conta para realizar o saque.
// OBS: Na verificação se o valor do saque é maior que o saldo deve
// ser considerado e também contabilizado o valor da taxa a ser
// cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
// da taxa do saque não pode ser maior que o saldo disponível.
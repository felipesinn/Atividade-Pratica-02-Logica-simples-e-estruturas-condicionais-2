const idade = parseInt(prompt("Digite a idade do atleta:"));
const peso = parseFloat(prompt("Digite o peso do atleta:"));

let categoria = "";

if (idade <= 12) {
    categoria = "Infantil";
} else if (idade >= 13 && idade <= 16) {
    if (peso <= 40) {
        categoria = "Juvenil leve";
    } else {
        categoria = "Juvenil pesado";
    }
} else if (idade >= 17 && idade <= 24) {
    if (peso <= 45) {
        categoria = "Sênior leve";
    } else if (peso > 45 && peso <= 60) {
        categoria = "Sênior médio";
    } else {
        categoria = "Sênior pesado";
    }
} else if (idade > 24) {
    categoria = "Veterano";
}

if (categoria !== "") {
    console.log(`Categoria do atleta: ${categoria}`);
} else {
    console.log("Não foi possível determinar a categoria do atleta.");
}

// 8. Faça um algoritmo que leia a idade e peso de um atleta e imprima
// a sua categoria, de acordo com a seguinte tabela:

// Idade Peso Categoria
// Até 12 anos - Infantil
// 13 a 16 anos Até 40kg Juvenil leve
// Acima de 40kg Juvenil pesado
// 17 a 24 anos Até 45kg Sênior leve
// Acima de 45kg até 60kg Sênior médio
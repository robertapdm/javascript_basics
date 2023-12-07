console.log(`O ano novo está chegando!!`);

let cantora = `Mariah Carey`;
console.log(cantora);

let idade = 54;
console.log(`${cantora} tem ${idade} anos.`);

let anoAtual = 2023;

let anoNascimento = anoAtual - idade
console.log(`${cantora} nasceu em ${anoNascimento}`);

let dataNnascimento = `27 de março de ${anoNascimento}`;
console.log(dataNnascimento)

let quartaFeira = true;
console.log(quartaFeira);
console.log(typeof quartaFeira);

if (idade >= 18){
    console.log(`Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de ${cantora}`);
}else{
    console.log(`Sinto muito, mas assistirá da tv globo.`);
};

let aniversario = `Maio`;

if( aniversario === `Agosto` || aniversario === `Dezembro` || aniversario === `Junho`){
    console.log(`Uma ou mais opções estão corretas. O mês escolhido foi o mês ${aniversario}`);
}else{
    console.log(`Algo de errado não está certo, o mês digitado foi o mês de ${aniversario}`);
};
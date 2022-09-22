var nome = prompt("Qual é o seu nome?");
var idade = prompt("Qual é a sua idade?");
var linguagem = prompt("Qual linguagem você está aprendendo?");

   

alert("Olá " + [nome] + ", você tem " + [idade] + " anos e já está aprendendo " + [linguagem] + "!");

var pergunta = prompt("Você gosta de estudar " + linguagem + "? Responda com o número 1 para SIM ou 2 para NÃO.")

if (pergunta == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
}
else{
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
}


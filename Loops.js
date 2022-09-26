let resposta1 = prompt("Você quer seguir para área de Front-End (Digite 1) ou seguir para a área de Back-End (Digite 2)?")


if (resposta1 === "1"){
    let resposta2 = prompt("Quer aprender React ou aprender Vue?")
}
else {
    let resposta3 = prompt("Quer aprender aprender C# ou aprender Java?")
}

let resposta4 = prompt("Escolha entre seguir se especializando na área escolhida (Digite 1) ou seguir se desenvolvendo para se tornar Fullstack (Digite 2)?")

if (resposta4 === "1"){
    alert("Que legal! Boa sorte")
}
else {
    alert("Boa escolha! Sucesso")
}

    let resposta5 = prompt("Tem alguma outra tecnologia você gostaria de se especializar? Se sim digite 1, se não digite 2?")

while (resposta5 === "1"){
    let resposta6 = prompt("Qual a tecnologia?")
    alert("Boa escolha! A tecnologia " + resposta6 + " é ótima para sua carreira")
    resposta5 = prompt("Tem alguma outra tecnologia você gostaria de se especializar? Se sim digite 1, se não digite 2?")

}







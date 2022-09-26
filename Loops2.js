let resposta = prompt("Tente acertar um número de 0 a 10")

if (resposta == 7){
    alert("Parabéns você acertou!")
}
else {
    resposta = prompt("Tente novamente")
    if (resposta == 7){
        alert("Parabéns você acertou!")
    }
    else {
        resposta = prompt("Tente novamente, essa é sua última tentativa")
        if (resposta == 7){
            alert("Parabéns você acertou!")
        }
        else {
            alert("Você perdeu!")
        }
    }
}
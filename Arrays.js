//listas
let listaFrutas = []
let listaLaticinios = []
let listaCongelados = []
let listaDoces = []

//adicionando

let resposta1 = prompt("Você deseja adicionar uma comida na sua lista de compras? Sim ou Não")

//categorizando e continuando a adicionar

while (resposta1 == "Sim") {
    let resposta2 = prompt("Qual comida você deseja inserir?")
    let resposta3 = prompt("De qual categoria é esta comida: Frutas, Doces, Derivados do leite ou Congelados?")
    if (resposta3 == "Frutas"){
        listaFrutas.push(resposta2)
    }
    if (resposta3 == "Doces"){
        listaDoces.push(resposta2)
    }
    if (resposta3 == "Congelados"){
        listaCongelados.push(resposta2)
    }
    if (resposta3 == "Derivados do leite"){
        listaFrutas.push(resposta2)
    }
resposta1 = prompt("Você deseja adicionar uma comida na sua lista de compras? Sim ou Não")
}
//finalizando e imprimindo
if (resposta1 == "Não") {
    alert(`Lista de compras:\n  Frutas: ${listaFrutas}\n  Laticínios: ${listaLaticinios}\n  Doces: ${listaDoces}\n  Congelados: ${listaCongelados}`);

}

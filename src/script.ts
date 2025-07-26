function resumo (
    usuario: {nome:string, idade:number}, 
    escolaridade: {nivel:string}
) { // pode separar por ;
    return `Olá ${usuario.nome}, você tem ${usuario.idade}, e está no nível ${escolaridade.nivel}`
}
let user = {
    nome: "pedro",
    idade: 90
}
let estudos = {
    nivel: "superior"
}
console.log(resumo(user, estudos))
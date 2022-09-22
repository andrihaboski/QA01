function aplicarDesconto (valor, desconto){
    if(desconto > valor) return 0
    return valor - desconto
}

function aplicarDescontotest(){
    return aplicarDesconto(10,02) === 8
}

console.log('a aplicação de desconto esta funcionando?')
console.log(aplicarDescontotest())
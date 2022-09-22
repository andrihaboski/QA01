const test = require ('tape')
const index = require ('./index')

test ('aplicarDesconto1',(t) => {
    t.assert(index.aplicarDesconto(10,5)=== 5,
    "Descontou corretamente")
    t.end()
})

test ('aplicarDesconto2',(t) => {
    t.assert(index.aplicarDesconto(5,10)=== 0,
    "Descontou corretamente")
    t.end()
})

test ('aplicarDesconto3',(t) => {
    t.assert(index.aplicarDesconto(15,5)=== 10,
    "Descontou corretamente")
    t.end()
})

test ('aplicarDesconto4',(t) => {
    t.assert(index.aplicarDesconto(20,5)=== 15,
    "Descontou corretamente")
    t.end()
})
/*
Os operadores do RxJs se dividem em duas categorias:
Operadores de Criação e Operadores Encadeáveis (Pipeable Operators)

Operadores de criação simplesmente criam observables
Operadores encadeáveis iteram sobre os observables manipulando os dados
*/

// Creation Operator
const { of, from } = require('rxjs')

// Pipeable Operator
const { last, map } = require('rxjs/operators')

const obs = of(1, 2, 3, 'Alice', false, 'Último')

obs.subscribe(function(value) {
  console.log(`O valor gerado foi: ${value}`)
})

console.log('---------')

const obs2 = of(1, 2, 3, 'Alice', false, 'Último')
  .pipe(last())

obs2.subscribe(function(value) {
  console.log(`O valor gerado foi: ${value}`)
})

console.log('---------')

of(1, 2, 3, 'Alice', false, 'Último')
  .pipe(last())
  .pipe(map(value => value[0]))
  .subscribe(function(value) {
    console.log(`O valor gerado foi: ${value}`)
  })

console.log('---------')

of(1, 2, 3, 'Alice', false, 'Último')
  .pipe(
    last(),
    map(value => value[0])
  )
  .subscribe(function(value) {
    console.log(`O valor gerado foi: ${value}`)
  })

console.log('---------')

from([1, 2, 3, 'Alice', false, 'Último'])
  .pipe(last())
  .subscribe(function(value) {
    console.log(`O valor gerado foi: ${value}`)
  })
// Os observables e operators são síncronos por padrão
const { from, asyncScheduler, async } = require('rxjs')
const { observeOn } = require('rxjs/operators')

console.log('Antes...')

from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  .subscribe(console.log)

console.log('Depois...')

console.log('--------')

console.log('Antes...')

from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  .pipe(observeOn(asyncScheduler)) // setamos um "ambiente de execução"
  .subscribe(console.log)

  console.log('Depois...')
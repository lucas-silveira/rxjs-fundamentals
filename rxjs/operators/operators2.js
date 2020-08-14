const { interval } = require('rxjs')
const { map, concatAll } = require('rxjs/operators')

interval(1000)
  .pipe(
    map(() => [1, 2, 3]),
    concatAll() // Semelhante ao método flat. Usado para transformar
    // high-order observables em first-order observables
  )
  .subscribe(console.log)
/* Desafio:
 - Criar um stream de números entre min e max com Observable
*/
const { Observable, noop } = require('rxjs');

const between = (min, max) => new Observable(subscriber => {
  if (min > max) [min, max] = [max, min]
  while (min <= max) subscriber.next(min++)
  subscriber.complete()
})

between(4, 10).subscribe(
  num => console.log(`num = ${num}`),
  noop,
  () => console.log('Fim')
)
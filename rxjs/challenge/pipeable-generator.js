const { Observable, of } = require('rxjs')

function generatePipeable(func) {
  return function(...args) {
    return function(observable) {
      return Observable.create(subscriber => {
        observable.subscribe(value => {
          func(subscriber, value, args)
        })
      })
    }
  }
}

const startsWith = generatePipeable((subscriber, value, args) => {
  if (value.toLowerCase().startsWith(args[0].toLowerCase()))
    subscriber.next(value)
})

of('Tony Stark', 'Peter Quill', 'Peter Park')
  .pipe(startsWith('Peter'))
  .subscribe(console.log)
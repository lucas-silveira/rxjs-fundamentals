const { from, Observable, noop } = require('rxjs')

// com função
function first() {
  return function(observable) {
    return Observable.create(subscriber => {
      observable.subscribe(value => {
        subscriber.next(value)
        subscriber.complete()
      })
    })
  }
}

function last() {
  return function(observable) {
    return Observable.create(subscriber => {
      let last;
      observable.subscribe(
        value => last = value,
        noop,
        () => subscriber.next(last)
      )
    })
  }
}

from([1, 2, 3, 4, 5])
  .pipe(first())
  .subscribe(console.log)

from([1, 2, 3, 4, 5])
  .pipe(last())
  .subscribe(console.log)

// com objeto
function firstWithObj() {
  return function(observable) {
    return Observable.create(subscriber => {
      observable.subscribe({
        next(value) {
          subscriber.next(value)
          subscriber.complete()
        }
      })
    })
  }
}

function lastWithObj() {
  return function(observable) {
    return Observable.create(subscriber => {
      let last;
      observable.subscribe(
        {
          next(value) {
            last = value
          },
          complete() {
            subscriber.next(last)
          }
        }
      )
    })
  }
}

from([1, 2, 3, 4, 5])
  .pipe(firstWithObj())
  .subscribe(console.log)

from([1, 2, 3, 4, 5])
  .pipe(lastWithObj())
  .subscribe(console.log)
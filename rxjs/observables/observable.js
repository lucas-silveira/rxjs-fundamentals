const { Observable } = require('rxjs')

const promise = new Promise(resolve => {
  resolve('Promise é bem legal!')
})

promise.then(console.log)

const observer = new Observable(subscriber => {
  subscriber.next('Observer é bem legal!')
  subscriber.next('Observer')
  subscriber.next('é')
  subscriber.next('bem legal!')
  subscriber.complete() // Fim
})

observer.subscribe(console.log)

const observer2 = new Observable(subscriber => {
  setInterval(() => subscriber.next('Observer é bem legal!'), 1000)
})

observer2.subscribe(console.log)
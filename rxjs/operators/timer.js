const { Subscription, timer } = require('rxjs')

const obs = timer(3000, 500)

const sub1 = obs.subscribe(number => {
  console.log(`#1 Gerou o número: ${number}`)
})

const sub2 = obs.subscribe(number => {
  console.log(`#2 Gerou o número: ${number}`)
})

sub1.add(sub2)

setTimeout(() => {
  sub1.unsubscribe() // Cancela o subscription pai e filhos (sub2)
  // sub2.unsubscribe()
}, 5000)

const sub3 = obs.subscribe(number => {
  console.log(`#3 Gerou o número: ${number}`)
})

const sub4 = obs.subscribe(number => {
  console.log(`#4 Gerou o número: ${number}`)
})

const sub = new Subscription()

sub.add(sub3)
sub.add(sub4)

setTimeout(() => {
  sub.unsubscribe()
}, 10000)
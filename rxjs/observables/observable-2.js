const { Observable, noop } = require('rxjs')

const observer = Observable.create(subscriber => {
  subscriber.next('RxJS')
  subscriber.next('é')
  subscriber.next('bem')
  subscriber.next('poderoso!')

  if (Math.random() > 0.5) {
    subscriber.complete()
  } else {
    subscriber.error('Erro')
  }
})

// 1º método
observer.subscribe(
  value => console.log(`Valor: ${value}`),  // Função que trata as respostas de sucesso
  error => console.log(`Erro: ${error}`),   // Função que trata os erros. Podemos usar a função "noop" do rxjs para não precisar lidar com o erro.
  () => console.log('completou.')            // Quando o subscriber.complete() é executado, essa função é chamada.
)

// 2º método
observer.subscribe({
  next(value) {
    console.log(`Valor: ${value}`)
  },
  error(msg) {
    console.log(`Erro: ${msg}`)
  },
  complete() {
    console.log('completou.')
  }
})
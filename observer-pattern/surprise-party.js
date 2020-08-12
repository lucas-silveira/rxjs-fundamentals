const readline = require('readline')

function getResponse(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  return new Promise(resolve => {
    rl.question(question, resp => {
      resolve(resp);
      rl.close();
    })
  })
}

function girlfriend() {
  console.log('N: Apagar as luzes.')
  console.log('N: Pedir silêncio.')
  console.log('N: Surpresa!')
}

function manager() {
  console.log('S: Monitorar barulho.')
}

const concierge = {
  observers: [],
  subscribe: observer => concierge.observers.push(observer),
  notify: message => concierge.observers.forEach(obs => obs(message)),
  listen: async () => {
    while(true) {
      const response = await getResponse('O namorado chegou? (s/N/q) ')
  
      if (response.toLowerCase() === 's')
        concierge.notify(response);
  
      if (response.toLowerCase() === 'q')
        break
    }
  }
}

concierge.subscribe(girlfriend)
concierge.subscribe(manager)
concierge.listen()
let r // variável para armazenar os resultados

const I = a => a

r = I(3)
r // 3

r = I(I)
r // [f: I]

const SELF = f => f(f)
r = SELF(I)
r // [f: I]

const FIRST = a => b => a
r = FIRST(7)(10)
r // 7

const LAST = a => b => b
r = LAST(7)(10)
r // 10
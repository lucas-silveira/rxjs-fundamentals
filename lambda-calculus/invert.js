let r

const SELF = f => f(f)

const FIRST = a => b => a

const LAST = a => b => b

const INVERT = f => a => b => f(b)(a)
r = INVERT(LAST)(7)(10)
r // 7

const LAST2 = a => b => INVERT(FIRST)(a)(b)
r = LAST2(7)(10)
r // 10

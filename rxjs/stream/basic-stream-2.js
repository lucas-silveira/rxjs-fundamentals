function generateElement(array) {
  return {
    start(fn) {
      let index = 0
      const interval = setInterval(() => {
        if (index >= array.length) return clearInterval(interval)
        fn(array[index++])
      }, 1000)

      return {
        stop() {
          clearInterval(interval)
        }
      }
    }
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const temp1 = generateElement(numbers)

temp1.start(num => {
  console.log(Math.pow(2, num))
})
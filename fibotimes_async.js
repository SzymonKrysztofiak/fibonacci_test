const math = require('./math')
;(async () => {
  for (let number = 1; number < 8000; number++) {
    await new Promise((resolve, reject) => {
      math.fibonacciAsync(number, (err, fibo) => {
        if (err) reject(err)
        else {
          let now = new Date().toISOString()
          console.log(
            `${now} Fibonacci for ${number} = ${math.fibonacci(fibo)}`
          )
          resolve()
        }
      })
    })
  }
})().catch(err => console.error(err))

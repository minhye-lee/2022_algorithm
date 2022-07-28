let input = Number(require('fs').readFileSync('temp.txt').toString().split('\n')[0])

if (!(input % 5)) console.log(input / 5)
else {
  let answer = 0
  while (input > 0) {
    input -= 3
    answer += 1
    if (!(input % 5)) {
      console.log(input / 5 + answer)
      break
    } else if (input === 1 || input === 2) {
      console.log(-1)
      break
    } else if (input === 0) {
      console.log(answer)
      break
    }
  }
}

let input = Number(require('fs').readFileSync('/dev/stdin').toString().split('\n')[0])

const arr = Array.from({ length: input + 1 }, () => 0)

arr[2] = 1
arr[3] = 1

for (let i = 4; i <= input; i++) {
  let answer = arr[i - 1] + 1
  if (i % 3 === 0) {
    answer = Math.min(arr[i / 3] + 1, answer)
  }
  if (i % 2 === 0) {
    answer = Math.min(arr[i / 2] + 1, answer)
  }
  arr[i] = answer
}
console.log(arr[input])

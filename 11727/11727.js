let input = Number(require('fs').readFileSync('/dev/stdin').toString().split('\n')[0])

const arr = Array.from({ length: input + 1 }, () => 0)
arr[1] = 1
arr[2] = 3

for (let i = 3; i <= input; i++) {
  arr[i] = (arr[i - 1] + 2 * arr[i - 2]) % 10007
}

console.log(arr[input])

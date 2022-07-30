const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const [cnt, ...numberArr] = input.map((i) => Number(i))

const arr = Array.from({ length: 101 }, () => 0)
arr[1] = 1
arr[2] = 1
arr[3] = 1
arr[4] = 2
arr[5] = 2

for (let i = 0; i < cnt; i++) {
  for (let j = 1; j <= numberArr[i]; j++) {
    if (arr[j]) continue
    else arr[j] = arr[j - 1] + arr[j - 5]
  }
  console.log(arr[numberArr[i]])
}

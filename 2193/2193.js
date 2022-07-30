let input = Number(require('fs').readFileSync('/dev/stdin').toString().split('\n')[0])

const arr = Array.from({ length: input + 1 }, () => 0)
arr[1] = 1
arr[2] = 1
for (let i = 3; i <= input; i++) {
  arr[i] = BigInt(arr[i - 1]) + BigInt(arr[i - 2])
}
console.log(String(arr[input]))

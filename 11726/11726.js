let input = require('fs').readFileSync('temp.txt').toString().split('\n')[0];
let count = Number(input)
const arr = Array.from({length: 1001}, () => 0)
arr[1] = 1
arr[2] = 2

for(let i = 3; i <= count; i++) {
    arr[i] = (arr[i-1] + arr[i-2]) % 10007
}
console.log(arr[count])

let input = require('fs').readFileSync('temp.txt').toString().split('\n')[0];
let count = Number(input)
const arr = Array.from({length: 1001}, () => 0)
arr[1] = 1
arr[2] = 2

for(let i = 3; i <= count; i++) {
    arr[i] = (arr[i-1] + arr[i-2]) % 10007
}
//나중에 나누면 값이 커져서 정상적인 계산 불가능
console.log(arr[count] )

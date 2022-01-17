let input = require('fs').readFileSync('temp.txt').toString().split('\n');

const arr = input[1].split(' ').map(i => Number(i))
const result = Array.from({length: arr.length}, () => 0)
arr.sort((a, b) => a - b)
result[0] = arr[0]

for(let i = 1; i < arr.length; i++) {
    result[i] = arr[i]+ result[i-1]
}
console.log(result.reduce((p, c) => p+c))
let input = require('fs').readFileSync('temp.txt').toString().split('\n');

const [cnt, ...numberArr] = input.map(i => Number(i))

const arr = Array.from({length: 12}, () => 0)
arr[1] = 1
arr[2] = 2
arr[3] = 4
for(let i = 0; i < cnt; i++) {
    for(let j = 4; j <= numberArr[i]; j++) {
        arr[j] = arr[j-1] + arr[j-2] + arr[j-3]    
    }
    console.log(arr[numberArr[i]])
}
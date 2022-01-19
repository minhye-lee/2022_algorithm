let input = require('fs').readFileSync('temp.txt').toString().split('\n');
console.log(input)
const [num, cnt, ...rest] = input
const arr = Array.from({length: Number(num)+1}, () => [])
for(let i = 0; i < rest.length; i++) {
    const [a ,b] = (rest[i].split(' ').map((i) => Number(i)).sort((a,b) => a -b))
    console.log(a, b)
    arr[a].push(b)
    // arr[b].push(a)
}
console.log(arr)
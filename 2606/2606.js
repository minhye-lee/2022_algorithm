let input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n'); 
const [num, cnt, ...rest] = input
const arr = Array.from({length: Number(num)+1}, () => [])
const result = Array.from({length: Number(num)+1}, () => 0)

for(let i = 0; i < rest.length; i++) {
    const [a ,b] = (rest[i].split(' ').map((i) => Number(i)).sort((a,b) => a -b))
    arr[a].push(b)
    arr[b].push(a)
}

function dfs(index) {
    arr[index].forEach((item) => {
        console.log(item)
        if(result[item]) {
            return
        }
        result[item] = 1
        dfs(item)
    })
}
dfs(1)
console.log(result.filter((i) => i === 1).length -1)
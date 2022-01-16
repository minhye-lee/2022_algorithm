let input = require('fs').readFileSync('temp.txt').toString().split('\n');
const [cnt, ...fibo] = input.map(i => Number(i))


const arr0 = Array.from({length: 41},() => 0)
const arr1 = Array.from({length: 41},() => 0)

arr0[0] = 1 
arr1[1] = 1
for(let i = 0; i < cnt; i++) {
    for(let j = 2; j <= fibo[i]; j++) {
        if(arr0[j] || arr1[j]) continue
        arr0[j] = arr0[j-1] + arr0[j-2]
        arr1[j] = arr1[j-1] + arr1[j-2]
    }
    console.log(arr0[fibo[i]], arr1[fibo[i]])
}

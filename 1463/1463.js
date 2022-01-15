let input = Number(require('fs').readFileSync('temp.txt').toString().split('\n')[0])

const arr = Array.from({length: input+1}, () => 0)

for (let i = 2; i <= input; i++) {
    let temp = arr[i-1]+1
    if(i % 3 === 0)
        temp = Math.min(arr[i / 3]+1, temp)
    
    if( i % 2 === 0) 
        temp = Math.min(arr[i / 2]+1, temp)
    
    arr[i] = temp
}
console.log(arr[input])
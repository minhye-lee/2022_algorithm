let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const [switchNum, cnt] = input[0].split(' ').map(i => Number(i))

const arr = Array.from({length: switchNum}, () => false)
for(let i = 1; i <= cnt; i++) {
    const [type, num1, num2] = input[i].split(' ').map(i => Number(i))
    if(type) 
       console.log(arr.filter((item, index) => index >= num1-1 && index <= num2-1 && item).length)
     else {
        for(let j = num1-1; j <= num2-1; j++) {
            arr[j] = !arr[j]
        }
    }
}
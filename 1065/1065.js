let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')[0];
let cnt = 0
for(let i = 1; i <= Number(input); i++) {
    let diff = 0
    let isSuccess = true
    for(let j = String(i).length-1; j > 0; j--) {
        const num = String(i)
        if(j !== String(i).length-1 && num[j] - num[j-1] !== diff){
            diff = num[j] - num[j-1]
            isSuccess = false
            break;
        }
        else
            diff = num[j] - num[j-1]
    }
    if(isSuccess) {
        cnt++
    }
}

console.log(cnt)
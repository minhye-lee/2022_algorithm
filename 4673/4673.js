let a = 1
let sum = 0
const arr = Array(10000)
while(a <= 10000) {
    const parseA = String(a)
    sum = a
    for(let i = 0; i < parseA.length; i++) {
        sum += Number(parseA[i])
    }

    arr[sum] = 1
    a++
}
for (let i = 0; i < arr.length; i++) {
    if(!arr[i] && i !== 0 && i < 10000) {
        console.log(i)
    }
} 
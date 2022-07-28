let [cnt, ...commandList] = require('fs').readFileSync('temp.txt').toString().split('\n')

const arr = []
const answer = []
for (let i = 0; i < Number(cnt); i++) {
  const [command, value] = commandList[i].split(' ')
  if (command === 'push') {
    arr.push(Number(value))
  } else if (command === 'pop') {
    const popedElement = arr.pop()
    if (popedElement) answer.push(popedElement)
    else answer.push(-1)
  } else if (command === 'size') {
    answer.push(arr.length)
  } else if (command === 'empty') {
    if (arr.length) answer.push(0)
    else answer.push(1)
  } else if (command === 'top') {
    if (arr.length) answer.push(arr[arr.length - 1])
    else answer.push(-1)
  }
}

console.log(answer.join('\n'))

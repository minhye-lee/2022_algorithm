let [cnt, ...stairList] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((el) => Number(el))

const dp = Array.from({ length: cnt }, () => 0)
dp[0] = stairList[0]
dp[1] = stairList[0] + stairList[1]
dp[2] = Math.max(stairList[0] + stairList[2], stairList[1] + stairList[2])

for (let i = 3; i <= cnt; i++) {
  dp[i] = Math.max(dp[i - 3] + stairList[i - 1] + stairList[i], dp[i - 2] + stairList[i])
}

console.log(dp[cnt - 1])

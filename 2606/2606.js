let input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n')
const [num, cnt, ...rest] = input
const graph = Array.from({ length: Number(num) + 1 }, () => [])
const visited = Array.from({ length: Number(num) + 1 }, () => false)

for (let i = 0; i < cnt; i++) {
  const [from, to] = rest[i].split(' ').map((i) => Number(i))
  graph[from].push(to)
  graph[to].push(from)
}
dfs(graph, 1)

function dfs(graph, startNode) {
  if (visited[startNode]) return
  else {
    visited[startNode] = true
    graph[startNode].forEach((v) => {
      if (!visited[v]) dfs(graph, v)
    })
  }
}
console.log(visited.filter((el) => el).length - 1)

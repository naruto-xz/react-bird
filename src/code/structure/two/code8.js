/**
 *  图
 */

const graph = {
  0: [1,2],
  1: [2],
  2: [0,3],
  3: [3]
}

//图的优先深度遍历（尽可能深度搜索图的分支）
{
  let set = new Set();
  function dfs(q){
    console.log(q);
    set.add(q);
    graph[q].forEach(c => {
      if(!set.has(c)){
        dfs(c);
      }
    })
  }
  // dfs(2); //2013
}

//图的优先广度遍历（先访问离根节点最近的节点）
{
  function bfs(n){
    let set = new Set();
    set.add(n);
    const q = [n]
    while (q.length){
      const n = q.shift();
      console.log(n);
      graph[n].forEach(c => {
        if(!set.has(c)){
          q.push(c);
          set.add(c);
        }
      })
    }
  }
  // bfs(2); //2031
}
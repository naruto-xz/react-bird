import Types from "../actionTypes"
function add(state = {
  n: 1
}, action: any){
  let newSate = JSON.parse(JSON.stringify(state));  //拷贝一份
  switch (action.type){
    case Types.Add: newSate.n = newSate.n + 1; break;
    case Types.Delete: newSate.n = newSate.n - 1; break;
  }
  return newSate; //返回新的引用
}
export default add;
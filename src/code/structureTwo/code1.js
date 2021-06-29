//练习一：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
{
  function valid(str){
    if (str.length % 2 === 1) {
      return false;
    }
    const map = new Map([
      [')', '('],
      ['}', '{'],
      [']', '['],
    ])
    const stack = [];
    for (let key of str) {
      if (map.has(key)) {
        if (!stack.length || stack[stack.length - 1] !== map.get(key)) {
          return false;
        }
        stack.pop();
      } else {
        stack.push(key);
      }
    }
    return !stack.length;
  }
  const str = '(){}';
  let res = valid(str);
  console.log(res);
}
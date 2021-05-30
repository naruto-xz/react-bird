//定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
{
  //min方法的 时间复杂度应为O（1）
  let stack = [];
  let minStack = [];  //空间换时间

  //栈的push方法
  function push(node){
    stack.push(node);
    if (minStack.length === 0 || node < min()) {
      minStack.push(node);
    } else {
      minStack.push(min());
    }
  }

  //栈的pop方法
  function pop(){
    minStack.pop();
    return stack.pop();
  }

  //栈的顶端
  function top(){
    return stack[stack.length-1]
  }

  //最小栈的最上层永远是最小的值
  function min(){
    return minStack[minStack.length - 1];
  }
}

{
  //笨办法 min方法的 时间复杂度为o(n); 利用栈的弹出依次和最小的比，比出最小值，然后再利用辅助栈补充回原来的栈
  let stack = [3,4,2,7,9,0];
  let subStack = [];
  function min(stack){
    let minNum;
    while (stack.length) {
      let num = stack.pop();
      if (minNum === undefined || num < minNum) {
        minNum = num;
      }
      subStack.push(num);
    }
    while (subStack.length) {
      stack.push(subStack.pop());
    }
    return minNum;
  }
  let res = min(stack);
  console.log(res);
}

//参考链接：https://zhuanlan.zhihu.com/p/74340783
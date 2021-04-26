//1.斐波那契数列
// 0 1 1 2 3 5 8 13
{
  //公式版
  function fib(n){
    if (n < 0) {
      throw new Error('输入的数字不能小于0')
    }
    if (n < 2) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
  }
  let res = fib(4);
  console.log(res); //3
}

{
  //for循环，利用交换去除重复计算
  let curFib = 0;
  function fib(n){
    if (n < 0) {
      throw new Error('输入的数字不能小于0')
    }
    if (n < 2) {
      return n;
    }
    let f0 = 0;
    let f1 = 1;
    for (let i = 1; i < n; i++){
      curFib = f0 + f1;
      f0 = f1;
      f1 = curFib;
    }
    return curFib;
  }
  let res = fib(45);
  console.log(res);
}

{
  //for循环，利用数组除重复计算(空间换时间)
  function fib(n){
    if (n < 0) {
      throw new Error('输入的数字不能小于0');
    }
    if (n < 2) {
      return n;
    }
    let list = [];
    list[0] = 0;
    list[1] = 1;
    for (let i = 1; i < n; i++) {
      list[i + 1] = list[i] + list[i - 1];
    }
    return list[n];
  }
  let res = fib(45);
  console.log(res);
}


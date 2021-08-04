/**
 * 队列
 */

//用javascript的方式定义一个队列
{
  function Queue(){
    let arr = [];
    this.enqueue = function (element){
      arr.push(element);
    }
    this.dequeue = function (){
      arr.shift();
    }
    this.front = function () {
      return arr[0];
    }
    this.isEmpty = function () {
      return arr.length === 0;
    }
    this.size = function () {
      return arr.length;
    }
    this.clear = function (){
      arr = [];
    }
    this.print = function (){
      return arr;
    }
  }
  let queue = new Queue();
  // queue.enqueue('1');
  // queue.enqueue('2');
  // console.log(queue.print());
  // console.log(queue.front());
  // console.log('----------------')
}

//js异步任务队列执行顺序
{
  async function async1(){
    await async2();
    console.log('async1 end')
  }
  async function async2(){
    console.log('async2 end')
  }
  async1();

  setTimeout(function (){
    console.log('setTimeout')
  }, 0);

  new Promise(resolve => {
    console.log('Promise');
    resolve();
  }).then(()=>{
    console.log('promise1')
  }).then(()=>{
    console.log('promise2')
  })
}
//async2 end => Promise => async1 end => promise1 => promise2 => setTimeout
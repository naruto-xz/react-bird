//队列

//用javascript实现一个队列，包含以下方法
/**
 * enqueue(element(s)):向队列尾部添加一个（或多个）元素。
 * dequeue():移除队列的第一项，并返回移除的元素。
 * front():返回队列的第一个元素--最先被添加，最先被移除的元素。
 * isEmpty():判断队列是否为空。
 * size():返回队列的长度。
 */

{
  function Queue(){
    let arr = [];
    this.enqueue = function (node) {
      arr.push(node);
    }
    this.dequeue = function () {
      arr.shift();
    }
    this.front = function () {
      return arr[0];
    }
    this.isEmpty = function () {
      return !arr.length;
    }
    this.size = function () {
      return arr.length;
    }
  }
  let obj = new Queue();
  // console.log(obj.size());
}

//练习一：优先队列 （就是正常入，按优先级出。）
//常见的就是机场的登机顺序。头等舱和商务舱的优先级高于经济舱。实现优先队列，设置优先级。
{
  function PriorityQueue(){
    let arr = [];
    function QueueElement(element, priority){
      this.element = element;
      this.priority = priority;
    }
    //每次添加的时候先和队列中的优先级高的比较，比它小就插入，比它大就在最后添加
    this.enqueue =  function (element, priority){
      let queueElement = new QueueElement(element, priority);
      let add = false;
      for (let i = 0; i<arr.length; i++) {
        if (queueElement.priority < arr[i].priority) {
          arr.splice(i, 0, queueElement);
          add = true;
          break;
        }
      }
      if (!add) {
        arr.push(queueElement);
      }
    }
    //其它都一样
    this.dequeue = function(){
      arr.shift();
    }
    this.front = function () {
      return arr[0];
    }
    this.isEmpty = function () {
      return !arr.length;
    }
    this.size = function () {
      return arr.length;
    }
  }
  let obj =  new PriorityQueue();
  // obj.enqueue('2',2);
  // obj.enqueue('5',5);
  // obj.enqueue('3',3);
  // console.log(obj.dequeue());
  // console.log(obj.dequeue());
  // console.log(obj.dequeue());
}

//练习二：计算特定时间范围内最近的请求。(3000ms)
//输入：
// ["RecentCounter", "ping", "ping", "ping", "ping"]
// [[], [1], [100], [3001], [3002]]
// 输出：
// [null, 1, 2, 3, 3]
/**
 * 们只会考虑最近 3000 毫秒到现在的 ping 数，因此我们可以使用队列存储这些 ping 的记录。
 * 当收到一个时间 t 的 ping 时，我们将它加入队列，并且将所有在时间 t - 3000 之前的 ping 移出队列。
 *
 * 时间复杂度：O(n)，其中 n 是 ping 的次数。
 * 空间复杂度：O(n)，n即存储的请求次数,其中 n=3000 是最大的存储次数。
 */
{
  function RecentCounter() {
    this.q = [];
  };
  RecentCounter.prototype.ping = function(t) {
    this.q.push(t);
    while (this.q[0] < t - 3000) {
      this.q.shift();
    }
    return this.q.length;
  };
  let recentCounter = new RecentCounter();
  console.log(recentCounter.ping(1));     // requests = [1]，范围是 [-2999,1]，返回 1
  console.log(recentCounter.ping(100));   // requests = [1, 100]，范围是 [-2900,100]，返回 2
  console.log(recentCounter.ping(3001));  // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
  console.log(recentCounter.ping(3002));  // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3
}






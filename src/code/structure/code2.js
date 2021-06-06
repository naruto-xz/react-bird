//队列

/**
 * 1.实现一个队列，包含以下方法
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
      return arr.shift();
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
  console.log(obj.size());
}

// 优先队列 （就是正常入，按优先级出。）
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
      return arr.shift();
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
  obj.enqueue('2',2);
  obj.enqueue('5',5);
  obj.enqueue('3',3);
  console.log(obj.dequeue());
  console.log(obj.dequeue());
  console.log(obj.dequeue());
}

//练习：用两个栈来实现一个队列，完成队列的Push和Pop操作。






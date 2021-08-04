/**
 * 手撕订阅发布模式
 *  1.创建一个对象,里面包含订阅、发布、取消订阅和订阅一次四种方法
 *  2.先订阅。定义一个事件对象，用来缓存要执行的订阅事件列表(订阅)
 *  3.再发布，发布的时候判断订阅的事件列表中是否有对应要执行的函数，有的话则循环执行缓存的事件列表。(发布)
 *  4.off方法根据 eventName和fn 取消订阅，filter过滤执行函数中对应的fn函数即可。
 *  5.once 方法只监听一次，订阅的是一个执行一次然后立刻取消的函数（订阅一次）
 */
{
  function EventEmitter(){
    this.events = {};
    this.$on = function (eventName, fn){
      if(this.events[eventName]){
        this.events[eventName].push(fn);
      } else {
        this.events[eventName] = [fn];
      }
    }
    this.$emit = function (eventName, data){
      if(this.events[eventName]){
        this.events[eventName].forEach(fn => {
          fn(data);
        })
      }
    }
    this.$off = function (eventName, fn){
      if(this.events[eventName]){
        this.events[eventName] = fn ? this.events[eventName].filter(e => e !== fn) : [];
      }
    }
    this.$once = function (eventName, fn){
      const fun = (...rest)=> {
        fn.apply(this, rest);
        this.off(eventName, fun);
      }
      this.on(eventName, fun)
    }
  }
  function listener1(data){
    console.log('监听器 listener1 执行', data);
  }
  function listener2(){
    console.log('监听器 listener2 执行');
  }

  let eventEmitter = new EventEmitter();
  eventEmitter.$on('connect1', listener1)
  eventEmitter.$on('connect1', listener2)
  eventEmitter.$off('connect1', listener1);
  eventEmitter.$emit('connect1', '23');

  // eventEmitter.$once('connect2', listener2);
  // eventEmitter.$emit('connect2');
  // eventEmitter.$emit('connect2');


}
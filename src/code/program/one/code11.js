{
  /**
   * 一、Promise核心实现
   * 1.新建 MyPromise 类，传入执行器 executor
   * 2.executor 传入 resolve 和 reject 方法
   * 3.状态与结果的管理
   * 4.在原型上绑定then函数，同样传入onFulfilled,onRejected执行函数，执行函数的参数就是上面的结果，根据状态判断执行哪一个
   * 二、Promise上加入异步
   * 5.利用空数组缓存pending状态下成功与失败函数的执行，等到状态发生变化真正执行时，再去调用缓存下来的函数。
   * 三、实现then方法的链式调用
   * 6.在then方法中生成并再次返回一个Promise对象，这样每次调用then方法都有新的Promise对象，就实现了链式调用
   * 7.在Promise对象中去先执行第一次then执行的结果，然后把执行结果返回给新执行的resolve函数，等待下次then函数的调用
   * 8.对onFulfilled的执行结果要注意判断一下，如果结果还是promise，则继续执行then方法，直到状态值改变。
   * 四、捕获执行器错误
   * 9.try catch，在catch中调用reject方法
   * 10.then执行时的错误捕获
   * 五、实现then的参数变为可选，默认给onFulfilled和onRejected一个默认函数
   * 11.typeof onFulfilled === 'function' ? onFulfilled : value => value
   * 六、实现静态的resolve和reject方法
   * 12.定义static resolve方法，直接返回可用的Promise对象。
   * 七、定义catch、finally方法
   * 13.调用then方法，catch调用onRejected, finally调用onFulfilled和onRejected方法
   */
  const PENDING = 'pending';
  const FULFILLED = 'fulfilled';
  const REJECTED = 'rejected';
  class MyPromise{
    constructor(executor) {
      try {
        executor(this.resolve, this.reject);
      }catch (error){
        this.reject(error);
      }
    }
    status = PENDING;
    value = '';
    reason = '';
    onFulfilledCallback = [];
    onRejectedCallback = [];
    resolve = (value)=> {
      if(this.status === PENDING){
        this.status = FULFILLED;
        this.value = value;
      }
      this.onFulfilledCallback.forEach((fn)=> {
        fn(value);
      });
    }
    reject = (reason)=> {
      if(this.status === PENDING){
        this.status = REJECTED;
        this.reason = reason;
      }
      this.onRejectedCallback.forEach((fn)=> {
        fn(reason);
      });
    }
    static resolve = (value)=> {
      return new MyPromise(resolve => {
        resolve(value)
      })
    }
    static reject = (reason)=> {
      return new MyPromise((resolve, reject) => {
        reject(reason)
      })
    }
  }
  MyPromise.prototype.then = function (onFulfilled, onRejected){
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => reason;
    const promise2 = new MyPromise((resolve, reject)=>{
      switch (this.status){
        case "fulfilled":
          setTimeout(()=> {
            try{
              const x = onFulfilled(this.value);
              if(x instanceof MyPromise) {
                x.then(resolve, reject)
              } else{
                resolve(x)
              }
            }catch (error){
              reject(error);
            }
          }, 0)
          break;
        case "rejected":
          setTimeout(()=> {
            try {
              const x = onRejected(this.reason);
              if(x instanceof MyPromise) {
                x.then(resolve, reject)
              } else{
                reject(x);
              }
            } catch (error){
              reject(error);
            }
          }, 0);
          break
        case "pending":
          this.onFulfilledCallback.push(() => setTimeout(()=> {
            try{
              const x = onFulfilled(this.value);
              resolve(x);
            }catch (error){
              reject(error);
            }
          }, 0));
          this.onRejectedCallback.push(() => setTimeout(()=> {
            try {
              const x = onRejected(this.reason);
              reject(x);
            } catch (error){
              reject(error);
            }
          }, 0));
          break;
      }
    })
    return promise2;
  }
  MyPromise.prototype.catch = function (onRejected){
    return this.then(null, onRejected)
  }
  MyPromise.prototype.finally = function (fn){
    this.then(res => {
      fn(res);
    }, error => {
      fn(error);
    })
  }

  //测试一 (基础调用)
  // new MyPromise((resolve, reject)=> {
  //   // setTimeout(()=> {
  //   //   resolve('success');
  //   // }, 200)
  //   resolve('success')
  //   // reject('failed');
  // }).then(res => {
  //   console.log(res); //success
  // }, err => {
  //   console.log(err); //failed
  // })

  //测试二 (链式调用)
  // let promise = new MyPromise((resolve, reject)=> {
  //   resolve('success')
  // })
  // promise.then(res => {
  //   console.log(res); //success
  //   return 'success1';
  //   // return new MyPromise((resolve, reject)=> {
  //   //   resolve('success1')
  //   // });
  // }).then(res => {
  //   console.log(res); //success1
  //   return 'success2'
  // }).then(res => {
  //   console.log(res); //success2
  // });

  //测试三 (错误捕获)
  // new MyPromise((resolve, reject)=> {
  //   throw new Error('捕获错误');
  // }).then(res => {
  //   console.log(res);
  // }, err => {
  //   console.log(err.message); //捕获错误
  // })

  //测试四 (静态方法)
  // MyPromise.resolve('success').then(res => {
  //   console.log(res);
  // })
  // MyPromise.reject('failed').then(res => {
  //   console.log(res);
  // }, err => {
  //   console.log(err);
  // })

  //测试五 (catch、finally)
  // new MyPromise((resolve, reject)=> {
  //   reject('拒绝');
  // }).catch(error => {
  //   console.log(error);
  //   return error;
  // }).finally((res) => {
  //   console.log(res);
  // })

  //测试题
  // MyPromise.resolve().then(() => {
  //   console.log(0);
  //   return MyPromise.resolve(4);
  // }).then((res) => {
  //   console.log(res)
  // })
  //
  // MyPromise.resolve().then(() => {
  //   console.log(1);
  // }).then(() => {
  //   console.log(2);
  // }).then(() => {
  //   console.log(3);
  // }).then(() => {
  //   console.log(5);
  // }).then(() =>{
  //   console.log(6);
  // })
}
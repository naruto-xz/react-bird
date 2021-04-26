//debounce 防抖
{
  function debounce(fn, time){
    return function (...rest){  //rest为数组[24],可以被解构;
      setTimeout(()=> {
        fn.apply(this, rest);
      },time)
    }
  }
  function add(age){
    console.log(age);
  }
  let func = debounce(add, 3000);
  func(24);
}

//手撕jsonp
function jsonp({url, params, cb}){
  return new Promise(resolve => {
    let script = document.createElement('script');
    window[cb] = function (data){
      resolve(data);
      document.body.removeChild(script);
    }
    let arr = [];
    params = {...params, cb}
    for(let key in params){
      arr.push(`${key}=${params[key]}`)
    }
    script.src = `${url}?${arr.join('&')}`;
    document.body.appendChild(script);
  })
}
jsonp({
  url: 'https://www.baidu.com/sugrec',
  params: {prod: 'pc', wd: 'b'},
  cb: 'show'
}).then(res => {
  console.log(res);
});

//
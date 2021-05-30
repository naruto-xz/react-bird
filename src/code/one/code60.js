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
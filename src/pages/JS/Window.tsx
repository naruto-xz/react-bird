import React from "react";
const WindowPractice = ()=> {
  //地址获取相关
  //完整地址
  console.log(window.location.href);  //http://localhost:3000/user/login
  //域名+端口
  console.log(window.location.host);  //localhost:3000
  //域名
  console.log(window.location.hostname);  //localhost
  //端口
  console.log(window.location.port);  //3000
  //路径
  console.log(window.location.pathname);  //  /user/login
  //查询参数
  console.log( window.location.search)

  //打开新窗口
  // window.open("www.baidu.com","_blank",`height=1080,width=1920,top=0,left=0,toolbar=no`);

  //跳转
  // window.location.href = "http://www.baidu.com"

  //重载
  // window.location.reload();

  return (
    <h5>WindowPractice</h5>
  )
}
export default WindowPractice;
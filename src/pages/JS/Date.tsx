import React from "react";
import moment from "moment";
const DatePractice = ()=> {
  /**
   * 原生日期处理方法
   */
  // let date = new Date()
  //当前时间,格式化处理
  // console.log(date) //Mon Jan 04 2021 09:46:27 GMT+0800 (中国标准时间)
  // console.log(Date.now());  //1609724633882
  // console.log(new Date('2021-1-4')) //Mon Jan 04 2021 00:00:00 GMT+0800 (中国标准时间)
  //获取毫秒、毫秒转日期
  // console.log(date.getTime());  //1609724774897
  // date.setTime(1332403882588)
  // console.log(date);  //Thu Mar 22 2012 16:11:22 GMT+0800 (中国标准时间)
  //设置时间
  // date.setHours(0)
  // date.setMinutes(0)
  // date.setSeconds(0)
  // console.log(date);  //Mon Jan 04 2021 00:00:00 GMT+0800 (中国标准时间)
  //格式化日期
  // const formatDate = function (date:any) {
  //   let y = date.getFullYear();
  //   let m = date.getMonth() + 1;
  //   m = m < 10 ? '0' + m : m;
  //   let d = date.getDate();
  //   d = d < 10 ? ('0' + d) : d;
  //   return y + '-' + m + '-' + d;
  // };
  // let res = formatDate(date);
  // console.log(res);
  //近24小时、近7天、近30天
  // console.log(date.getTime() - 1000 * 60 * 60 * 24)

  /**
   * 第三方moment.js
   */
  //解析
  //获取当前时间,获取当前时间毫秒数
  console.log(moment().format())  //2021-01-04T11:00:02+08:00
  console.log(moment('2021-01-03').format())  //2021-01-03T00:00:00+08:00
  console.log(moment().valueOf()) //1609730014645
  moment.locale('zh-cn'); //默认中文
  //显示
  //格式化日期
  console.log(moment().format('YYYY-MM-DD HH:mm:ss')) //2021-01-04T11:15:48+08:00
  //操作
  //近24小时、近7天、近30天
  console.log(moment().add(-1, 'days').format('YYYY-MM-DD HH:mm:ss')); //2020-12-28 11:18:45
  //从设置时间单位的开头来对其进行更改
  console.log(moment().startOf('day').format('YYYY-MM-DD HH:mm:ss')) //2021-01-04 00:00:00
  console.log(moment().endOf('day').format('YYYY-MM-DD HH:mm:ss')) //2021-01-04 23:59:59
  //取值、设值
  //取值
  console.log(moment().year())  //2021
  console.log(moment().month()) //0
  console.log(moment().date()) //4
  console.log(moment().get('year')) //2021
  //设值
  console.log(moment().set('year', 2020).format()) //2020-01-04T11:15:48+08:00

  return (
    <h5>DatePractice</h5>
  )
}
export default DatePractice;
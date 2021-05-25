import React from 'react';
import ReactDOM from 'react-dom';
import './index.d'
import App from './App';
import 'antd/dist/antd.css';

/**
 * npm包相关
 * @constructor
 */
// import x from 'x-design';
// x.svgWM({
//   content: 'x-design'
// })
// import Search from "rc-search"
// import "rc-search/lib/index.css";
ReactDOM.render(
  <App />,
  // <Search onSearch={()=>console.log(1234)}></Search>,
  document.getElementById('root')
);

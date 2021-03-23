import React from "react";

// @ts-ignore
import ModuleA from "./ModuleA" //module.exports导出的模块，相当于export default，所以也能用import导入
// const ModuleA = require('./ModuleA')  //我们更常用node提供的require方法的方式来加载node CommonJs规范提供的module.exports导出的模块


const ModulePractice = ()=> {

  //module.exports的导出方式
  ModuleA.add()
  console.log(ModuleA.x)

  return (
    <h5>ModulePractice</h5>
  )
}
export default ModulePractice;
// export {ModulePractice};
// export {ModulePractice as Test};

// module.exports.ModulePractice = ModulePractice
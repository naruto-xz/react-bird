import React from "react"
import SunPractice from "./Sun"

//写法一
class FatherPractice extends React.Component<any, any>{
  private childRef: any
  constructor(props: any) {
    super(props);
    this.childRef = React.createRef()
  }
  openChild = ()=> {
    this.childRef.current.open()
  }
  render() {
    return (
      <div>
        <h5>父级</h5>
        <button onClick={this.openChild}>打开子</button>
        <SunPractice ref={this.childRef} />
      </div>
    );
  }
}
export default FatherPractice;

//写法二
// class FatherPractice extends React.Component<any, any>{
//   private childRef: any
//   constructor(props: any) {
//     super(props);
//   }
//   onRef = (ref:any)=> {
//     this.childRef = ref
//   }
//   openChild = ()=> {
//     this.childRef.open()
//   }
//   render() {
//     return (
//       <div>
//         <h5>父级</h5>
//         <button onClick={this.openChild}>打开子</button>
//         <SunPractice onChildRef={this.onRef} />
//       </div>
//     );
//   }
// }
// export default FatherPractice;
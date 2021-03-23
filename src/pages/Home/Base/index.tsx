import React from "react"

/**
 * jxs, state状态、props、component、生命周期、事件处理
 */
class BasePractice extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      title: 'BasePractice',
      num: 1
    }
  }

  componentWillMount() {
    console.log('1');
  }
  componentWillReceiveProps(nextProps: Readonly<any>, nextContext: any) {
    console.log('2');
    // if (nextProps.person.age === this.props.person.age) {
    //   return;
    // }
  }
  shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
    // if (nextProps.person.age === this.props.person.age) {
    //   console.log('性能优化3')
    //   return false;
    // }
    return true;
  }

  componentDidMount() {
    console.log('4');
  }
  componentWillUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any) {
    console.log('5');
  }
  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
    console.log('6');
  }
  componentWillUnmount() {
    console.log('7');
  }

  add = ()=>{
    let { num } = this.state
    this.setState({
      num: num+1
      // num: num++ //num不会先变化，所以导致状态值是一直不变的
    })
    // //不是立刻更新的
    // console.log(this.state.num)
  }
  add1 = ()=> {
    let { num } = this.state  //无用
    // this.setState({
    //   num: num+1
    // }, ()=> {
    //   //要等到render函数被重新执行后,才会走这里拿到变化后的状态数据
    //   console.log(this.state.num)
    // })

    this.setState((state:any)=> {
      return {
        num: state.num+1
      }
    })
    this.setState((state:any)=> {
      return {
        num: state.num+1
      }
    })
    console.log(this.state.num) //1 3 5
  }
  add2 = ()=>{
    this.setState({
      num: this.state.num+1
    },()=> {
      console.log(this.state.num) //2
    })

    // this.setState((state:any)=> {
    //   return {
    //     num: state.num+1
    //   }
    // }, ()=> {
    //   console.log(this.state.num) //2
    // })
  }
  addAge = ()=> {
    this.props.onChange(1)
  }
  render() {
    let { title, num } = this.state;
    let { person, other } = this.props;
    console.log('render执行');
    return (
      <div className={"cem-customer-card"}>
        <h4>{title}</h4>
        <div>数量:{num}</div>
        <button onClick={this.add}>add</button>
        <button onClick={this.add1}>add1</button>
        <button onClick={this.add2}>add2</button>
        <div>{person.name} : {person.age}</div>
        <div>{other.sex}</div>
        <button onClick={this.addAge}>addAge</button>
      </div>
    );
  }
}
export default BasePractice;
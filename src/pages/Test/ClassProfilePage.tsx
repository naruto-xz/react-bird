import React from 'react'
export class ClassProfilePage extends React.Component<any,any> {
  showMessage = () => {
    alert('类' + this.props.user);
  };
  handleClick = () => {
    setTimeout(this.showMessage, 6000);
  };
  render() {
    return <button onClick={this.handleClick}>class</button>;
  }
}
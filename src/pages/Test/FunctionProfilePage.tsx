import React from 'react'
export function FunctionProfilePage(props:any) {
  const showMessage = () => {
    alert('函数 ' + props.user);
  };
  const handleClick = () => {
    setTimeout(showMessage, 6000);
  };
  return (
    <button onClick={handleClick}>function</button>
  );
}
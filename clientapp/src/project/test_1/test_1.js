// import React, { useState } from "react";

// function MyDivText(props) {
//     const [text, setText] = useState('This is a test');
    
// function OnMouseOver(e){
//     setText('');
// }
// function OnMouseOut (e){
//     setText('This is a test')
// }
//     {

//     }
//     return (
//       <div onMouseOver={OnMouseOver} onMouseOut={OnMouseOut} 
//            style={{borderStyle: "solid", borderColor:"black"}}>This is a test{text}</div>
//   );
// }
// export default MyDivText;


// import React from 'react';
// class Counter extends React.Component {
//  constructor(props) {
//  super(props);
//  this.state = { count: 0 };
//  this.increaseHandler = this.increaseHandler.bind(this);
//  this.decreaseHandler = this.decreaseHandler.bind(this);
//  this.restartHandler = this.restartHandler.bind(this);
//  }
//  increaseHandler() {
//  const newCount = this.state.count + 1;
//  this.setState({ count: newCount });
//  }
//  decreaseHandler() {
//  const newCount = this.state.count - 1;
//  this.setState({ count: newCount });
//  }
//  restartHandler() {
//  this.setState({ count: 0 });
//  }
//  render() {
//  return <div>
//  <button onClick={this.increaseHandler}>Increase</button>
//  <button onClick={this.decreaseHandler}>Decrease</button>
//  <button onClick={this.restartHandler}>Restart</button>
//  <div>{this.state.count}</div>
//  </div>
//  }
// }
// export default Counter;

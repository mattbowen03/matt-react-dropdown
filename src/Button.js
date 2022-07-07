import React from "react";

export class Button extends React.Component {
  render() {
    console.log(this)
    return <button onClick={this.props.onClick}>Press Me</button>
  }
}
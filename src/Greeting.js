import React from "react";
import { Button } from './Button';

export class Greeting extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {name: 'Matt'};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return this.state.name == "Matt" ? this.setState({name: "Trevor"}) : this.setState({name: "Matt"});
    
  }

  render() {
    return (
      <div>
        <p>{this.state.name} is the best programmer!</p>
        <Button onClick={this.handleClick} />
      </div>
    )
  }
}
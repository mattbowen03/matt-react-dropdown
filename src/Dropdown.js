import React from "react";

export class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: "select"};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.value === "select") {
      alert('Please select a valid name.')
    } else {
      return this.setState({value: event.target.value});
    }
  }

  render() {
    return (
      <div>
        <p>
          {this.state.value} is the best programmer!
        </p>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="select">---Select---</option>
          <option value="Matt">Matt</option>
          <option value="Trevor">Trevor</option>
          <option value="Neither">Neither</option>
        </select>
      </div>
    )
  }
}
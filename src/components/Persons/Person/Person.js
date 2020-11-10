//ES6 syntax -functional component
import React, { Component } from "react";
import classes from "./Person.css";
import Aux from "../../../hoc/auxiliary";

class Person extends Component {
  render() {
    return (
      <React.Fragment>
        <p onClick={this.props.click}>
          I am {this.props.name} and i am {this.props.age} years old!!
        </p>
        <p>{this.props.childern}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </React.Fragment>
    );
  }
}

export default Person;

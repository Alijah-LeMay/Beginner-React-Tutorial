import React, { Component } from "react"

import classes from "./Hello.module.css"
// Functional Component

// function Hello(props) {
//   return <h2>Hello, {props.name}</h2>
// }

// Class Based
class Hello extends Component {
  render() {
    return <h2 className={classes.header}>Hello, {this.props.name}</h2>
  }
}

// class Welcome extends Component {
//   render() {
//     return <p className={classes.header}></p>
//   }
// }

export default Hello

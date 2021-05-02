import React, { Component } from "react"

class Turtle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      left: 500,
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => this.moveTurtle(), 1000)
  }

  moveTurtle() {
    this.setState({
      left: this.state.left + 5,
    })
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    return (
      <div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: this.state.left,
            width: "50px",
            height: "50px",
            backgroundColor: "green",
          }}
        ></div>
      </div>
    )
  }
}
export default Turtle

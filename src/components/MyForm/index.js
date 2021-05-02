import React, { Component } from "react"

export class MyForm extends Component {
  constructor(props) {
    super(props)

    this.state = { name: "" }
  }

  onChangeHandler = (event) => {
    this.setState({ name: event.target.value })
  }
  render() {
    return (
      <form>
        {/* {this.state.name ? <h1>Hello, {this.state.name}</h1> : null} */}
        {this.state.name && <h1>Hello, {this.state.name}</h1>}
        <p>What's your name?</p>
        <input type="text" onChange={this.onChangeHandler} />
      </form>
    )
  }
}

export default MyForm

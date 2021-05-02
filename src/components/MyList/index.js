import React, { Component } from "react"

const characters = ["John", "Nancy", "Mario"]

class MyList extends Component {
  render() {
    return (
      <div>
        {characters.map((character, index) => (
          <p key={index}>{character}</p>
        ))}
      </div>
    )
  }
}

export default MyList

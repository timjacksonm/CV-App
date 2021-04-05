import React, { Component } from "react";

class References extends Component {
  render() {
    return (
      <div>
        <h3>References</h3>
        <form>
          <h5>Name</h5>
          <input type='text' />
          <h5>Relation</h5>
          <input type='text' />
          <h5>Phone Number</h5>
          <input type='tel' />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default References;

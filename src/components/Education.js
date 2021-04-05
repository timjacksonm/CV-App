import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div>
        <h3>Education and Training</h3>
        <form>
          <h5>School Name</h5>
          <input type='text' placeholder='Stanford University' />
          <h5>School Location</h5>
          <input type='text' placeholder='Standford, CA' />
          <h5>Degree</h5>
          <input type='text' placeholder='BS' />
          <h5>Major</h5>
          <input tpye='text' placeholder='Computer Science ' />
          <h5>Completion Date</h5>
          <input type='date' />
          <button>Add</button>
        </form>
        <ul></ul>
      </div>
    );
  }
}

export default Education;

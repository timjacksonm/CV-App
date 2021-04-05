import React, { Component } from "react";

class WorkExp extends Component {
  render() {
    return (
      <div>
        <h3>Your Work Experience</h3>
        <form>
          <h5>Company Name</h5>
          <input type='text' />
          <h5>Job Title</h5>
          <input type='text' />
          <h5>Job Location</h5>
          <input type='text' />
          <h5>Start Date</h5>
          <input type='date' />
          <h5>End Date</h5>
          <input type='date' />

          <h5>Job Responsibilities</h5>
          <input type='text' />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default WorkExp;

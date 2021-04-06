import React, { Component } from 'react';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Education extends Component {
  render() {
    return (
      <div>
        <h3>Education and Training</h3>
        <form id='education' onSubmit={this.props.onAdd}>
          <h5>School Name</h5>
          <input
            type='text'
            placeholder='Stanford University'
            name='name'
            required
          />
          <h5>School Location</h5>
          <input
            type='text'
            placeholder='Standford, CA'
            name='location'
            required
          />
          <h5>Degree</h5>
          <input type='text' placeholder='BS' name='degree' required />
          <h5>Major</h5>
          <input
            tpye='text'
            placeholder='Computer Science'
            name='major'
            required
          />
          <h5>Completion Date</h5>
          <input type='date' name='date' required />
          <button type='submit'>Add</button>
        </form>
        <ul>
          {this.props.educationList.map((item) => {
            return (
              <div key={uniqid()}>
                <li
                  key={uniqid()}
                >{`Name:${item.Name} Location:${item.Location} Degree:${item.Degree} Major:${item.Major} Completion:${item.DateCompleted}`}</li>
                <FontAwesomeIcon
                  onClick={() => this.props.onDelete('education', item.Name)}
                  key={uniqid()}
                  icon='trash'
                />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Education;

import React, { Component } from 'react';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Skills extends Component {
  render() {
    return (
      <div>
        <h3>Skills and Highlights</h3>
        <form id='skills' onSubmit={this.props.onAdd}>
          <input
            type='text'
            onChange={this.props.resetInput}
            value={this.props.currentInput}
            required
          />
          <button type='submit'>Add</button>
        </form>
        <ul>
          {this.props.skillList.map((skill) => {
            return (
              <div key={uniqid()}>
                <li key={uniqid()}>{skill}</li>
                <FontAwesomeIcon
                  onClick={() => this.props.onDelete(skill)}
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

export default Skills;

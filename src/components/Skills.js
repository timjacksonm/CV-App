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
            name='skill'
            onChange={this.props.handleChange}
            value={this.props.state.skill}
            required
          />
          <button type='submit'>Add</button>
        </form>
        <ul>
          {this.props.skillList.map((item) => {
            return (
              <div key={uniqid()}>
                <li key={uniqid()}>{item}</li>
                <FontAwesomeIcon
                  onClick={() => this.props.onDelete('skills', item)}
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

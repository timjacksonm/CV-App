import React, { Component } from 'react';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Education.scss';

class Education extends Component {
  render() {
    return (
      <div className='education'>
        <h3>Education and Training</h3>
        <form
          id='education'
          className='formQuestions'
          onSubmit={this.props.onAdd}
        >
          <h5>School Name</h5>
          <input
            type='text'
            placeholder='Stanford University'
            name='eduNameInput'
            onChange={this.props.handleChange}
            value={this.props.state.eduNameInput}
            required
          />
          <h5>School Location</h5>
          <input
            type='text'
            placeholder='Standford, CA'
            name='eduLocationInput'
            onChange={this.props.handleChange}
            value={this.props.state.eduLocationInput}
            required
          />
          <h5>Degree</h5>
          <input
            type='text'
            placeholder='BS'
            name='eduDegreeInput'
            onChange={this.props.handleChange}
            value={this.props.state.eduDegreeInput}
            required
          />
          <h5>Major</h5>
          <input
            tpye='text'
            placeholder='Computer Science'
            name='eduMajorInput'
            onChange={this.props.handleChange}
            value={this.props.state.eduMajorInput}
            required
          />
          <h5>Completion Date</h5>
          <input
            type='date'
            name='eduDateInput'
            onChange={this.props.handleChange}
            value={this.props.state.eduDateInput}
            required
          />
          <button type='submit'>Add</button>
        </form>
        <ul>
          {this.props.educationList.map((item) => {
            return (
              <div key={uniqid()} className='educationAdded'>
                <li key={uniqid()}>
                  <ul>
                    <li>{`Name: ${item.Name}`}</li>
                    <li>{`Location: ${item.Location}`}</li>
                    <li>{`Degree: ${item.Degree}`}</li>
                    <li>{`Major: ${item.Major}`}</li>
                    <li>{`Completion: ${item.DateCompleted}`}</li>
                  </ul>
                </li>
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

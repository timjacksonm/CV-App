import React, { Component } from 'react';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class WorkExp extends Component {
  render() {
    return (
      <div>
        <h3>Your Work Experience</h3>
        <form id='workExp' onSubmit={this.props.onAdd}>
          <h5>Company Name</h5>
          <input
            type='text'
            placeholder=''
            name='workNameInput'
            onChange={this.props.handleChange}
            value={this.props.state.workNameInput}
            required
          />
          <h5>Job Title</h5>
          <input
            type='text'
            placeholder=''
            name='workTitleInput'
            onChange={this.props.handleChange}
            value={this.props.state.workTitleInput}
            required
          />
          <h5>Job Location</h5>
          <input
            type='text'
            placeholder=''
            name='workLocationInput'
            onChange={this.props.handleChange}
            value={this.props.state.workLocationInput}
            required
          />
          <h5>Start Date</h5>
          <input
            type='date'
            placeholder=''
            name='workStartInput'
            onChange={this.props.handleChange}
            value={this.props.state.workStartInput}
            required
          />
          <h5>End Date</h5>
          <input
            type='date'
            placeholder=''
            name='workEndInput'
            onChange={this.props.handleChange}
            value={this.props.state.workEndInput}
            required
          />
          <h5>Job Responsibilities</h5>
          <input
            type='text'
            name='jobDescription'
            onChange={this.props.handleChange}
            value={this.props.state.jobDescription}
          />
          <button type='button' onClick={this.props.onAddDescription}>
            Add Description
          </button>
          <ul>
            {this.props.state.jobDuties.map((item) => {
              return (
                <div key={uniqid()}>
                  <li key={uniqid()}>{item}</li>
                  <FontAwesomeIcon
                    onClick={() => this.props.onDelete('jobDuties', item)}
                    key={uniqid()}
                    icon='trash'
                  />
                </div>
              );
            })}
          </ul>
          <button form='workExp' type='submit'>
            Add Job
          </button>
        </form>
        <ul>
          {this.props.jobList.map((item) => {
            return (
              <div key={uniqid()}>
                <li
                  key={uniqid()}
                >{`Company Name:${item.Name} Title:${item.Title} Location:${item.Location} Start Date:${item.Start} End Date:${item.End} Description:${item.Description}`}</li>
                <FontAwesomeIcon
                  onClick={() => this.props.onDelete('workExp', item.Name)}
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

export default WorkExp;

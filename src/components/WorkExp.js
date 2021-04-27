import React from 'react';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/WorkExp.scss';

const WorkExp = (props) => {
  return (
    <div className='workexp'>
      <h3>Your Work Experience</h3>
      <form id='workExp' className='formQuestions' onSubmit={props.onAdd}>
        <h5>Company Name</h5>
        <input
          type='text'
          placeholder=''
          name='companyNameInput'
          onChange={props.handleChange}
          value={props.inputState.companyNameInput}
          required
        />
        <h5>Job Title</h5>
        <input
          type='text'
          placeholder=''
          name='jobTitleInput'
          onChange={props.handleChange}
          value={props.inputState.jobTitleInput}
          required
        />
        <h5>Job Location</h5>
        <input
          type='text'
          placeholder=''
          name='jobLocationInput'
          onChange={props.handleChange}
          value={props.inputState.jobLocationInput}
          required
        />
        <h5>Start Date</h5>
        <input
          type='date'
          placeholder=''
          name='startDateInput'
          onChange={props.handleChange}
          value={props.inputState.startDateInput}
          required
        />
        <h5>End Date</h5>
        <input
          type='date'
          placeholder=''
          name='endDateInput'
          onChange={props.handleChange}
          value={props.inputState.endDateInput}
          required
        />
        <h5>Job Responsibilities</h5>
        <input
          type='text'
          name='jobDescription'
          onChange={props.handleChange}
          value={props.inputState.jobDescription}
        />
        <button type='button' onClick={props.onAddDescription}>
          Add Description
        </button>
        <ul className='descriptionList'>
          {props.jobDuties.map((item) => {
            return (
              <div key={uniqid()}>
                <li key={uniqid()}>{item}</li>
                <FontAwesomeIcon
                  onClick={() => props.onDelete('jobDuties', item)}
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
        {props.jobList.map((item) => {
          return (
            <div key={uniqid()}>
              <li key={uniqid()} className='jobsAdded'>
                <ul>
                  <li>{`Name: ${item.Name}`}</li>
                  <li>{`Title: ${item.Title}`}</li>
                  <li>{`Location: ${item.Location}`}</li>
                  <li>{`Start: ${item.Start}`}</li>
                  <li>{`End: ${item.End}`}</li>
                  <li>{`Description: ${item.Description}`}</li>
                </ul>
                <FontAwesomeIcon
                  onClick={() => props.onDelete('workExp', item.Name)}
                  key={uniqid()}
                  icon='trash'
                />
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default WorkExp;

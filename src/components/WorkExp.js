import React from 'react';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/WorkExp.scss';

const WorkExp = (props) => {
  const {
    handleAdd,
    handleChange,
    handleDelete,
    jobs,
    jobDuties,
    setJobDuties,
    setInput,
    input,
  } = props;
  const {
    companyName,
    jobTitle,
    jobLocation,
    startDate,
    endDate,
    jobDescription,
  } = props.input;

  const addJobResponsibility = () => {
    setJobDuties([...jobDuties, input.jobDescription]);
    setInput({ ...input, jobDescription: '' });
  };

  const deleteJobResponsibility = (value) => {
    setJobDuties(jobDuties.filter((index) => index !== value));
  };

  return (
    <div className="workexp">
      <h3>Your Work Experience</h3>
      <form
        id="Your Work Experience"
        className="formQuestions"
        onSubmit={handleAdd}
      >
        <h5>Company Name</h5>
        <input
          type="text"
          placeholder=""
          name="companyName"
          onChange={handleChange}
          value={companyName}
          required
        />
        <h5>Job Title</h5>
        <input
          type="text"
          placeholder=""
          name="jobTitle"
          onChange={handleChange}
          value={jobTitle}
          required
        />
        <h5>Job Location</h5>
        <input
          type="text"
          placeholder=""
          name="jobLocation"
          onChange={handleChange}
          value={jobLocation}
          required
        />
        <h5>Start Date</h5>
        <input
          type="date"
          placeholder=""
          name="startDate"
          onChange={handleChange}
          value={startDate}
          required
        />
        <h5>End Date</h5>
        <input
          type="date"
          placeholder=""
          name="endDate"
          onChange={handleChange}
          value={endDate}
          required
        />
        <h5>Job Responsibilities</h5>
        <input
          type="text"
          name="jobDescription"
          onChange={handleChange}
          value={jobDescription}
        />
        <button type="button" onClick={addJobResponsibility}>
          Add Description
        </button>
        <ul className="descriptionList">
          {jobDuties.map((item) => {
            return (
              <div key={uniqid()}>
                <li key={uniqid()}>{item}</li>
                <FontAwesomeIcon
                  onClick={() => deleteJobResponsibility(item)}
                  key={uniqid()}
                  icon="trash"
                />
              </div>
            );
          })}
        </ul>
        <button form="Your Work Experience" type="submit">
          Add Job
        </button>
      </form>
      <ul>
        {jobs.map((item) => {
          const { Name, Title, Location, Start, End, Description } = item;
          return (
            <div key={uniqid()}>
              <li key={uniqid()} className="jobsAdded">
                <ul>
                  <li>{`Name: ${Name}`}</li>
                  <li>{`Title: ${Title}`}</li>
                  <li>{`Location: ${Location}`}</li>
                  <li>{`Start: ${Start}`}</li>
                  <li>{`End: ${End}`}</li>
                  <li>{`Description: ${Description}`}</li>
                </ul>
                <FontAwesomeIcon
                  onClick={() => handleDelete('Your Work Experience', item)}
                  key={uniqid()}
                  icon="trash"
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

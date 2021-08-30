import React from 'react';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Education.scss';

const Education = (props) => {
  const { handleAdd, handleChange, handleDelete, schools } = props;
  const { schoolName, schoolLocation, degree, major, completionDate } =
    props.input;
  return (
    <div className="education">
      <h3>Education and Training</h3>
      <form
        id="Education and Training"
        className="formQuestions"
        onSubmit={handleAdd}
      >
        <h5>School Name</h5>
        <input
          type="text"
          placeholder="Stanford University"
          name="schoolName"
          onChange={handleChange}
          value={schoolName}
          required
        />
        <h5>School Location</h5>
        <input
          type="text"
          placeholder="Standford, CA"
          name="schoolLocation"
          onChange={handleChange}
          value={schoolLocation}
          required
        />
        <h5>Degree</h5>
        <input
          type="text"
          placeholder="BS"
          name="degree"
          onChange={handleChange}
          value={degree}
          required
        />
        <h5>Major</h5>
        <input
          tpye="text"
          placeholder="Computer Science"
          name="major"
          onChange={handleChange}
          value={major}
          required
        />
        <h5>Completion Date</h5>
        <input
          type="date"
          name="completionDate"
          onChange={handleChange}
          value={completionDate}
          required
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {schools.map((school) => {
          const { Name, Location, Degree, Major, DateCompleted } = school;
          return (
            <div key={uniqid()} className="educationAdded">
              <li key={uniqid()}>
                <ul>
                  <li>{`Name: ${Name}`}</li>
                  <li>{`Location: ${Location}`}</li>
                  <li>{`Degree: ${Degree}`}</li>
                  <li>{`Major: ${Major}`}</li>
                  <li>{`Completion: ${DateCompleted}`}</li>
                </ul>
              </li>
              <FontAwesomeIcon
                onClick={() => handleDelete('Education and Training', school)}
                key={uniqid()}
                icon="trash"
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Education;

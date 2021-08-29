import React from 'react';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Education.scss';

const Education = (props) => {
  const { onAdd, handleChange, educationList, onDelete } = props;
  const {
    eduNameInput,
    eduLocationInput,
    eduDegreeInput,
    eduMajorInput,
    eduDateInput,
  } = props.inputState;
  return (
    <div className="education">
      <h3>Education and Training</h3>
      <form id="education" className="formQuestions" onSubmit={onAdd}>
        <h5>School Name</h5>
        <input
          type="text"
          placeholder="Stanford University"
          name="eduNameInput"
          onChange={handleChange}
          value={eduNameInput}
          required
        />
        <h5>School Location</h5>
        <input
          type="text"
          placeholder="Standford, CA"
          name="eduLocationInput"
          onChange={handleChange}
          value={eduLocationInput}
          required
        />
        <h5>Degree</h5>
        <input
          type="text"
          placeholder="BS"
          name="eduDegreeInput"
          onChange={handleChange}
          value={eduDegreeInput}
          required
        />
        <h5>Major</h5>
        <input
          tpye="text"
          placeholder="Computer Science"
          name="eduMajorInput"
          onChange={handleChange}
          value={eduMajorInput}
          required
        />
        <h5>Completion Date</h5>
        <input
          type="date"
          name="eduDateInput"
          onChange={handleChange}
          value={eduDateInput}
          required
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {educationList.map((item) => {
          const { Name, Location, Degree, Major, DateCompleted } = item;
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
                onClick={() => onDelete('education', Name)}
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

import React from 'react';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Skills.scss';

const Skills = (props) => {
  const { handleChange, handleAdd, handleDelete, input, skills } = props;
  return (
    <div>
      <h3>Skills and Highlights</h3>
      <form id="Skills and Highlights" className="skills" onSubmit={handleAdd}>
        <input
          type="text"
          name="skillValue"
          onChange={handleChange}
          value={input.skillValue}
          required
        />
        <button form="Skills and Highlights" type="submit">
          Add
        </button>
      </form>
      <ul className="skills">
        {skills.map((skill) => {
          return (
            <div key={uniqid()}>
              <li key={uniqid()}>{skill}</li>
              <FontAwesomeIcon
                onClick={() => handleDelete('Skills and Highlights', skill)}
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

export default Skills;

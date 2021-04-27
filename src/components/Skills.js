import React from 'react';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Skills.scss';

const Skills = (props) => {
  return (
    <div>
      <h3>Skills and Highlights</h3>
      <form id='skills' className='skills' onSubmit={props.onAdd}>
        <input
          type='text'
          name='skillValue'
          onChange={props.handleChange}
          value={props.inputState.skillValue}
          required
        />
        <button type='submit'>Add</button>
      </form>
      <ul className='skills'>
        {props.skillList.map((item) => {
          return (
            <div key={uniqid()}>
              <li key={uniqid()}>{item}</li>
              <FontAwesomeIcon
                onClick={() => props.onDelete('skills', item)}
                key={uniqid()}
                icon='trash'
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;

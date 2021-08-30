import React from 'react';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/References.scss';

const References = (props) => {
  const { handleAdd, handleChange, handleDelete, references } = props;
  const { referenceName, referenceRelation, referencePhonenumber } =
    props.input;
  return (
    <div className="references">
      <h3>References</h3>
      <form id="References" className="formQuestions" onSubmit={handleAdd}>
        <h5>Name</h5>
        <input
          type="text"
          placeholder=""
          name="referenceName"
          onChange={handleChange}
          value={referenceName}
          required
        />
        <h5>Relation</h5>
        <input
          type="text"
          placeholder=""
          name="referenceRelation"
          onChange={handleChange}
          value={referenceRelation}
          required
        />
        <h5>Phone Number</h5>
        <input
          type="tel"
          placeholder=""
          name="referencePhonenumber"
          onChange={handleChange}
          value={referencePhonenumber}
          // pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
          required
        />
        <button form="References" type="submit">
          Add
        </button>
      </form>
      <ul>
        {references.map((item) => {
          const { Name, Relation, PhoneNumber } = item;
          return (
            <div key={uniqid()}>
              <li key={uniqid()} className="referencesAdded">
                <ul>
                  <li>{`Name: ${Name}`}</li>
                  <li>{`Relation: ${Relation}`}</li>
                  <li>{`Phone #: ${PhoneNumber}`}</li>
                </ul>
                <FontAwesomeIcon
                  onClick={() => {
                    handleDelete('References', item);
                  }}
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

export default References;
